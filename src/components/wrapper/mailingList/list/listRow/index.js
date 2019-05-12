import React,{Component} from "react"
import {connect} from "react-redux"
import {tickContact} from "../../../../../myRedux/actions/tickActions/tickContactsML"

class listRow extends Component{
    // constructor(props){
    //     super(props);
    // }

    // bind doesn't work ???
    render() {
        const {person} = this.props;
        return (
            <div  className = 'contactsListRow'>                
                <div>
                    <input onClick ={()=>this.props.tickContact(person.GuID)}  guiid= {person.GuID} type = 'checkbox' id = {person.GuID}/>
                    <label htmlFor={person.GuID}></label>
                </div>
                <div>{person['Full Name']}</div>
                <div>{person['Company Name']}</div>
                <div>{person['Position']}</div>
                <div>{person['Country']}</div>
                <div>{person['Email']}</div>
                {/* <div><a href = '#'><FaUserEdit /></a></div> */}
            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        tickContact: id => dispatch(tickContact(id))
    }
}
export default connect(null,mapDispatchToProps)(listRow);

// classi anun@ contact.., komponentin@ listRow... to AHo
// Sync action blocking