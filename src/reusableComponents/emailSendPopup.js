import React,{Component} from "react";
import {connect} from "react-redux";
import getTemplates from "../myRedux/actions/templatesActions/getTemplatesAction"
import {closeSendEmailPopup} from "../myRedux/actions/sendEmailPopupActions/sendEmailPopupActions";
const makeTemaplesList = list => {
    list.map(el => {
        return (
        <div >
            <div><input type = 'checkbox' /></div>
            <div>{list.templateName}</div>
        </div>)
    })
}

class emailSendPopup extends Component {

    close = () => {

    }

    render() {
        if(this.props.sendEmailPopup.GuiIDArr) {
            alert("ARRAY")
        } else {
            alert("ML!")
        }
        return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>      asdas                  
                        <div className = 'popupButtons'>
                            <button onClick={this.props.closePopup}>Close</button>
                            {/* <button onClick = { this.sendContact }>Add</button>
                            <button onClick = { this.cancel }>Cancel</button> */}
                        </div>
                    </div>
                </div>
            </div>
            // <div id = "emailSendPopup" className = "popup">
            //     {makeTemaplesList(props.temaplesList)}
            // </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        sendEmailPopup:state.sendEmailPopup
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closePopup: () => {
            dispatch(closeSendEmailPopup())
        }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(emailSendPopup);
// petqa vercni templatesner@, @ntri, sargi silken -->...

// zamikaniya classov OKa ?
