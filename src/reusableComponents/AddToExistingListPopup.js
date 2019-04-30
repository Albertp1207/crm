import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closePopups } from '../myRedux/actions/openPopupsAction';
import { getMailingLists } from '../myRedux/actions/mailingListActions/mailingListFetchActions';
import { cancelSelected } from '../myRedux/actions/contactsListFetchAction';
import myFetch from '../tools/fetch';
import WaitAnimation from './waitAnimation';



class AddToExistingList extends Component{
    state = {
        wait: false,
        error: '',
        selID: -1
    }

    componentDidMount(){
        this.props.getMailingLists();
    }

    handleChange = (event) => {
        this.setState({selID: event.target.value});
    }

    addToExistingList = () => {
        const { collectionSelected } = this.props.contacts;
        const { lists } = this.props.mailingLists;
        let emailListName = '';
        const selectID = Number(this.state.selID);

        if (selectID !== -1) {
            this.setState({wait: true});

            lists.forEach(element => {
                if (element.EmailListID === selectID) {
                    emailListName = element.EmailListName;
                }
            });
    
            let emailList = {
                    EmailListID: selectID,
                    EmailListName: emailListName,
                    Contacts: collectionSelected
                }
                // console.log(emailList)
                myFetch('/emaillists', 'PUT', emailList)
                .then(res => {
                    // console.log(res);
                    //catch bad request
                    if(res.status === 400){
                        this.setState({wait: false, error: 'Check the data and try again'});
                    } else {        
                        this.setState({wait: false, error: ''});
                        this.props.cancelSelected();
                        this.props.closePopups();
                        
                    } 
                })
                .catch(error => {
                    this.setState({wait: false, error: 'Check the data and try again'});
                    console.log(error);
                });
        }else{
            this.setState({wait: false, error: 'Check the data and try again'});
        }
                
    }

    canceladdToExistingListPopup = () => {
        this.props.closePopups();
    }
    
    render() {
        const { lists, loading, error } = this.props.mailingLists;

        if(error) {
            return <div>ERROR --- {error.message}</div>
        }

        if(loading) {
            return <WaitAnimation />
        }
//         EmailListID: 1207
// EmailListName: " ertyerty"
        return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>
                        <div>
                            <select value={this.state.selID} onChange={this.handleChange}>
                                <option value = { -1 }> Choose Mailing List </option>
                                { lists.map(item => (
                                        <option value = { item.EmailListID } key = {item.EmailListID}>{ item.EmailListName }</option> ) 
                                        )}
                            </select>
                        </div>
                        <div className = 'popupButtons'>
                            <button onClick = { this.addToExistingList }>Add</button>
                            <button onClick = { this.canceladdToExistingListPopup }>Cancel</button>
                        </div>
                        <div>{this.state.error}</div>
                    </div>
                    { this.state.wait? <WaitAnimation />: null }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contactsList,
        mailingLists: state.mailingLists
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {  
            closePopups,
            getMailingLists,
            cancelSelected
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToExistingList);