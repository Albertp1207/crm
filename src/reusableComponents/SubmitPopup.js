import React from "react"
import {connect} from "react-redux"
import {closeSubmitPopup} from "../myRedux/actions/submitPopupActions/submitPopupActions"
import {Link} from "react-router-dom"
const SubmitPopup = props => {
    console.log(props)
    return    (
    <div className = 'popupWrap submitPopup'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>
                        <label>Are you sure ? </label>
                        <div className = 'popupButtons'>
                            {props.link ?
                                <Link to = {props.link}>
                                    <button onClick = { ()=>{props.callback(props.args);props.closeSubmitPopup()} }>YES</button>
                                </Link>:
                                <button onClick = { ()=>{props.callback(props.args);props.closeSubmitPopup()} }>YES</button>
                            }
                            
                            <button onClick = { props.closeSubmitPopup }>Cancel</button>
                        </div>                        
                    </div>
                </div>
            </div>
)}

const mapStateToProps = state => ({
    callback:state.submitPopup.callback,
    link: state.submitPopup.link,

})
const mapDispatchToProps = dispatch => ({
    closeSubmitPopup:()=> dispatch(closeSubmitPopup())
})
export default  connect(mapStateToProps,mapDispatchToProps)(SubmitPopup)