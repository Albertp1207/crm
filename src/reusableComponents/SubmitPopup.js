import React from "react"
import {connect} from "react-redux"
import {closeSubmitPopup} from "../myRedux/actions/submitPopupActions/submitPopupActions"
const SubmitPopup = props => {
    console.log(props)
    return    (
    <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>
                        
                        <div className = 'popupButtons'>
                            <button onClick = { ()=>{props.callback(props.args);props.closeSubmitPopup()} }>YES</button>
                            <button onClick = { props.closeSubmitPopup }>Cancel</button>
                        </div>                        
                    </div>
                </div>
            </div>
)}

const mapStateToProps = state => ({
    callback:state.submitPopup.callback,
    args: state.submitPopup.args
})
const mapDispatchToProps = dispatch => ({
    closeSubmitPopup:()=> dispatch(closeSubmitPopup())
})
export default  connect(mapStateToProps,mapDispatchToProps)(SubmitPopup)