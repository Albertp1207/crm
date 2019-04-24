import React,{Component} from "react";
import {connect} from "react-redux";
import myFetch from "../tools/fetch"



class emailSendPopup extends Component {
    render() {
        const {error,loading,templates} = this.props.templates
        if(error) {
            return <div>ERROR --- {error.message}</div>
        }

        if( loading) {
            return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'> 
                        <div>LOADING ...</div>
                    </div>
                </div>
             </div>
            )
        }
        return (
            <div className = 'popupWrap'>
                <div className = 'popupContent'>
                    <div className = 'popupSize'>      

                        <div className = 'popupButtons'> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
}

const mapDispatchToProps = dispatch => {
}

export default connect(mapStateToProps,mapDispatchToProps)(emailSendPopup);
// petqa vercni templatesner@, @ntri, sargi silken -->...

// zamikaniya classov OKa ?
