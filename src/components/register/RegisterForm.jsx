import React from 'react';
import { Link } from 'react-router-dom';

import handleRegister from './Register';

class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.doChangeUserName = this.doChangeUserName.bind(this);
        this.doChangeEmail = this.doChangeEmail.bind(this);
        this.doChangePassword = this.doChangePassword.bind(this);
        this.doChangeConfirmPassword = this.doChangeConfirmPassword.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChangeUserName(e){
        this.setState({userName: e.target.value});
    }
    
    doChangeEmail(e){
        this.setState({email: e.target.value});
    }

    doChangePassword(e){
        this.setState({password: e.target.value});
    }

    doChangeConfirmPassword(e){
        this.setState({confirmPassword: e.target.value});
    }

    doAction(e){
        e.preventDefault();
        handleRegister(this.state);
    }

    render(){
        return(
            <div className="wrapper">
                <div className="container">
                    <h1>Register</h1>
                    <form id="registrationForm"  onSubmit={this.doAction}>
                        <input type="text" placeholder="UserName" onChange={this.doChangeUserName} value={this.state.userName}  pattern=".*" required/>
                        <input type="email" placeholder="Email" pattern=".*" onChange={this.doChangeEmail} value={this.state.email}  required/>
                        <input type="password" placeholder="Password" pattern=".*" onChange={this.doChangePassword} value={this.state.password}  required/>
                        <input type="password" placeholder="Confirm Password" pattern=".*" onChange={this.doChangeConfirmPassword} value={this.state.confirmPassword}  required/>

                        <input type="submit" value="Register" className='submit'/>
                    </form>
                    <div><Link to='/verify' className='verify'>※ユーザーを確認する</Link></div>
                </div>
            </div>
        );
    }
}

export default RegisterForm