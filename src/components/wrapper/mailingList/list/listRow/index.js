import React from "react"
import { FaUserEdit } from "react-icons/fa";

export default (props) => {
    const {person} = props;
    console.log(person)
    return (
        <div  className = 'contactsListRow'>                
            <div><input  guiid= {person.GuID} type = 'checkbox'/></div>
            <div>{person['Full Name']}</div>
            <div>{person['Company Name']}</div>
            <div>{person['Position']}</div>
            <div>{person['Country']}</div>
            <div>{person['Email']}</div>
            <div><a href = '#'><FaUserEdit /></a></div>
        </div>
    )
}

// classi anun@ contact.., komponentin@ listRow... to AHo