import React from 'react';

import handleLognin from './Login';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
        this.doChangeUserName = this.doChangeUserName.bind(this);
        this.doChangePassword = this.doChangePassword.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChangeUserName(e){
        this.setState({userName: e.target.value});
    }

    doChangePassword(e){
        this.setState({password: e.target.value});
    }

    doAction(e){
        e.preventDefault();
        handleLognin(this.state);
    }

    render(){
        return(
            <div className="wrapper">
                <div className="container">
                    <h1>Welcome</h1>
                    <form id="login-form" onSubmit={this.doAction}>
                        <input type="text" placeholder="Username" onChange={this.doChangeUserName} value={this.state.userName} required/>
                        <input type="password" placeholder="Password" pattern=".*" onChange={this.doChangePassword} value={this.state.password} required/>
                        <input type="submit" value="Login"  className='submit'/>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm