import React from 'react';
import { connect } from 'react-redux';

import handleLognin from './Login';
import { changeLoginForm } from '../../actions/index';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.doChangeUsername = this.doChangeUsername.bind(this);
        this.doChangePassword = this.doChangePassword.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChangeUsername(e){
        this.props.changeForm(e.target.value, this.props.password);
    }

    doChangePassword(e){
        this.props.changeForm(this.props.username, e.target.value);
    }

    doAction(e){
        e.preventDefault();
        handleLognin(this.props.username, this.props.password);
    }

    render(){
        return(
            <div className="wrapper">
                <div className="container">
                    <h1>Welcome</h1>
                    <form id="login-form" onSubmit={this.doAction}>
                        <input type="text" placeholder="Username" onChange={this.doChangeUsername} value={this.props.username} required/>
                        <input type="password" placeholder="Password" pattern=".*" onChange={this.doChangePassword} value={this.props.password} required/>
                        <input type="submit" value="Login"  className='submit'/>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username: state.loginReducer.username,
    password: state.loginReducer.password
});

const mapDispatchToProps = dispatch  => {
    return {
        changeForm: (username, password) => dispatch(changeLoginForm(username, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);