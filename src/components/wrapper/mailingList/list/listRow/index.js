import React from "react"
import {connect} from "react-redux"
import {tickContact,clearTicks} from "../../../../../myRedux/actions/tickActions/tickContactsML"

const listRow = props => {
    const {person} = props;

    // bind doesn't work ???
    return (
        <div  className = 'contactsListRow'>                
            <div><input  guiid= {person.GuID} onClick={()=>{props.tickContact(person.GuID)}} type = 'checkbox'/></div>
            <div>{person['Full Name']}</div>
            <div>{person['Company Name']}</div>
            <div>{person['Position']}</div>
            <div>{person['Country']}</div>
            <div>{person['Email']}</div>
            {/* <div><a href = '#'><FaUserEdit /></a></div> */}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        tickContact: (id)=> dispatch(tickContact(id))
    }
}
export default connect(null,mapDispatchToProps)(listRow);

// classi anun@ contact.., komponentin@ listRow... to AHo