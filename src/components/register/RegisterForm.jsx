import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import handleRegister from './Register';
import { changeRegisterForm } from '../ActionCreater';

class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.doChangeUserName = this.doChangeUserName.bind(this);
        this.doChangeEmail = this.doChangeEmail.bind(this);
        this.doChangePassword = this.doChangePassword.bind(this);
        this.doChangeConfirmPassword = this.doChangeConfirmPassword.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChangeUserName(e){
        this.props.changeForm(e.target.value, this.props.email, this.props.password, this.props.confirmPassword);
    }
    
    doChangeEmail(e){
        this.props.changeForm(this.props.userName, e.target.value, this.props.password, this.props.confirmPassword);
    }

    doChangePassword(e){
        this.props.changeForm(this.props.userName, this.props.email, e.target.value, this.props.confirmPassword);
    }

    doChangeConfirmPassword(e){
        this.props.changeForm(this.props.userName, this.props.email, this.props.password, e.target.value);
    }

    doAction(e){
        e.preventDefault();
        handleRegister(this.props.userName, this.props.email, this.props.password, this.props.confirmPassword);
    }

    render(){
        return(
            <div className="wrapper">
                <div className="container">
                    <h1>Register</h1>
                    <form id="registrationForm"  onSubmit={this.doAction}>
                        <input type="text" placeholder="UserName" onChange={this.doChangeUserName} value={this.props.userName}  pattern=".*" required/>
                        <input type="email" placeholder="Email" pattern=".*" onChange={this.doChangeEmail} value={this.props.email}  required/>
                        <input type="password" placeholder="Password" pattern=".*" onChange={this.doChangePassword} value={this.props.password}  required/>
                        <input type="password" placeholder="Confirm Password" pattern=".*" onChange={this.doChangeConfirmPassword} value={this.props.confirmPassword}  required/>

                        <input type="submit" value="Register" className='submit'/>
                    </form>
                    <div><Link to='/verify' className='verify'>※ユーザーを確認する</Link></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userName: state.registerReducer.userName,
    email: state.registerReducer.email,
    password: state.registerReducer.password,
    confirmPassword: state.registerReducer.confirmPassword
});

const mapDispatchToProps = dispatch  => {
    return {
        changeForm: (userName, email, password, confirmPassword) => dispatch(changeRegisterForm(userName, email, password, confirmPassword))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);