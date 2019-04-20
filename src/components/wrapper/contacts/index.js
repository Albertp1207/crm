import React, { Component, Fragment } from 'react';
import ContactsList from './contactsList/ContactsList';
import ContactsListMenu from './contactsListMenu';

class Contacts extends Component{
    state = {
        contact: []
    }
    componentDidMount = () => {
        fetch('http://visual.istclabz.com:2112/api/contacts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({contact: data}) 
            })
            .catch(error => console.error(error))
    }

    showContacts = () => {
        let arr = [];
        for (let item of this.state.contact) {
           arr.push(<ContactsList person = {item} key = {item.GuID}/>);
        }
        return arr;
    }
    render() {
        return (
            <Fragment>
                <div className = 'contactsList'>
                    <div className = 'contactsHead'>
                        <div>Select</div>
                        <div>Full Name</div>
                        <div>Company Name</div>
                        <div>Position</div>
                        <div>Country</div>
                        <div>Email</div>
                        <div>Edit</div>
                    </div>
                    {this.showContacts()}
                </div>
<<<<<<< HEAD
                <ContactsListMenu />
=======
                {/* <Footer /> */}
>>>>>>> 6992e8500dba4f576599b2960b88fe80bc7313a7
            </Fragment>
        );
    }
}

export default Contacts;