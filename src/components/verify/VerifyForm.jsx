import React from 'react';
import { connect } from 'react-redux';

import handleVerify from './Verify';
import { changeVerifyForm } from '../ActionCreater';

class VerifyForm extends React.Component {
    constructor(props){
        super(props);
        this.doChangeUserName = this.doChangeUserName.bind(this);
        this.doChangeCode = this.doChangeCode.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChangeUserName(e){
        this.props.changeForm(e.target.value, this.props.code);
    }

    doChangeCode(e){
        this.props.changeForm(this.props.userName, e.target.value);
    }

    doAction(e){
        e.preventDefault();
        handleVerify(this.props.userName, this.props.code);
    }

    render(){
        return(
            <div className="wrapper">
                <div className="container">
                    <h1>Verify User</h1>
                    <form id="verifyForm" onSubmit={this.doAction} >
                    <input type="text" placeholder="UserName" onChange={this.doChangeUserName} value={this.props.userName} required/>
                    <input type="text" placeholder="Verification Code" pattern=".*" onChange={this.doChangeCode} value={this.props.code} required/>
                    <input type="submit" value="Verify" className='submit'/>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userName: state.verifyReducer.userName,
    code: state.verifyReducer.code
});

const mapDispatchToProps = dispatch  => {
    return {
        changeForm: (userName, code) => dispatch(changeVerifyForm(userName, code))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyForm);