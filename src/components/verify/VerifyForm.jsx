import React from 'react';
import { connect } from 'react-redux';

import handleVerify from './Verify';
import { changeVerifyForm } from '../../actions/index';

class VerifyForm extends React.Component {
    constructor(props){
        super(props);
        this.doChangeUsername = this.doChangeUsername.bind(this);
        this.doChangeCode = this.doChangeCode.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChangeUsername(e){
        this.props.changeForm(e.target.value, this.props.code);
    }

    doChangeCode(e){
        this.props.changeForm(this.props.username, e.target.value);
    }

    doAction(e){
        e.preventDefault();
        handleVerify(this.props.username, this.props.code);
    }

    render(){
        return(
            <div className="wrapper">
                <div className="container">
                    <h1>Verify User</h1>
                    <form id="verifyForm" onSubmit={this.doAction} >
                    <input type="text" placeholder="Username" onChange={this.doChangeUsername} value={this.props.username} required/>
                    <input type="text" placeholder="Verification Code" pattern=".*" onChange={this.doChangeCode} value={this.props.code} required/>
                    <input type="submit" value="Verify" className='submit'/>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username: state.verifyReducer.username,
    code: state.verifyReducer.code
});

const mapDispatchToProps = dispatch  => {
    return {
        changeForm: (username, code) => dispatch(changeVerifyForm(username, code))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyForm);