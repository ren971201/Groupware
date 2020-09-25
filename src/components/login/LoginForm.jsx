import React from 'react';
import { connect } from 'react-redux';

import handleLognin from './Login';
import { changeLoginForm } from '../../actions/index';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.doChangeUserName = this.doChangeUserName.bind(this);
        this.doChangePassword = this.doChangePassword.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChangeUserName(e){
        this.props.changeForm(e.target.value, this.props.password);
    }

    doChangePassword(e){
        this.props.changeForm(this.props.userName, e.target.value);
    }

    doAction(e){
        e.preventDefault();
        handleLognin(this.props.userName, this.props.password);
    }

    render(){
        return(
            <div className="wrapper">
                <div className="container">
                    <h1>Welcome</h1>
                    <form id="login-form" onSubmit={this.doAction}>
                        <input type="text" placeholder="Username" onChange={this.doChangeUserName} value={this.props.userName} required/>
                        <input type="password" placeholder="Password" pattern=".*" onChange={this.doChangePassword} value={this.props.password} required/>
                        <input type="submit" value="Login"  className='submit'/>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userName: state.loginReducer.userName,
    password: state.loginReducer.password
});

const mapDispatchToProps = dispatch  => {
    return {
        changeForm: (userName, password) => dispatch(changeLoginForm(userName, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);