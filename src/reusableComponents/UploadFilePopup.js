import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getContactsList } from '../myRedux/actions/contactsListFetchAction';
import { closePopups } from '../myRedux/actions/openPopupsAction';
import WaitAnimation from '../reusableComponents/waitAnimation';


class UploadFilePopup extends Component{
    state = {
        cancel: false,
        wait: false,
        error: '',
        file: null
    }
   
    cancel = () => {
        this.props.closePopups()
        
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.fileUpload(this.state.file).then((response)=>{
            console.log(response);
          })
    }
    onChange = (e) => {
        this.setState({file: e.target.files[0]});
        console.log(e.target.files[0]);
    }

    fileUpload = (file) => {
        console.log(file);
        const URL = "http://visual.istclabz.com:2112/api/contacts/upload";
        const method = 'POST';
        const formData = new FormData();

        formData.append('data', file);
        console.log(formData);
        return fetch(URL,{
            method,
            headers: {
                'Content-type': 'multipart/form-data',
                'Accept': 'application/json'
            },
            body: formData
        })
    }

    render() {
        
        return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>
                        {/* <form name="form1" method="post" encType = "multipart/form-data" action="http://visual.istclabz.com:2112/api/contacts/upload">
                            <div>
                                <label htmlFor="datafile">Data File</label>
                                <input name="datafile" type="file" />
                            </div>
                            <div className = 'popupButtons'>
                                <button type = 'submit'>Add</button>
                                <button onClick = { this.cancel }>Cancel</button>
                            </div>
                        </form>                         */}
                        <form name="form1" onSubmit={this.onFormSubmit}>
                            <div>
                                <label htmlFor="datafile">Data File</label>
                                <input name="datafile" type="file" onChange={this.onChange} id = 'file'/>
                            </div>
                            <div className = 'popupButtons'>
                                <button type = 'submit'>Add</button>
                                <button type = 'button' onClick = { this.cancel }>Cancel</button>
                            </div>
                        </form>                       
                    </div>
                    {this.state.wait? <WaitAnimation />: null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contactsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { 
            getContactsList,
            closePopups
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadFilePopup);



// this.setState({file: e.target.files[0]});
//         console.log(e.target.files);
//         var reader = new FileReader();

//         reader.onload = e => {
//             const data = e.target.result;
//             let workbook = XLSX.read(data,{type:"binary"});

//             const wsname = workbook.SheetNames[0];
//             const ws = workbook.Sheets[wsname];

//             const dataRes = XLSX.utils.sheet_to_csv(ws,{header:1});
//             console.log(dataRes)