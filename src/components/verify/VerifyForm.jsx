import React from 'react';

import handleVerify from './Verify'

class VerifyForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            code: ''
        };
        this.doChangeUserName = this.doChangeUserName.bind(this);
        this.doChangeCode = this.doChangeCode.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChangeUserName(e){
        this.setState({userName: e.target.value});
    }

    doChangeCode(e){
        this.setState({code: e.target.value});
    }

    doAction(e){
        e.preventDefault();
        handleVerify(this.state);
    }

    render(){
        return(
            <div className="wrapper">
                <div className="container">
                    <h1>Verify User</h1>
                    <form id="verifyForm" onSubmit={this.doAction} >
                    <input type="text" placeholder="UserName" onChange={this.doChangeUserName} value={this.state.userName} required/>
                    <input type="text" placeholder="Verification Code" pattern=".*" onChange={this.doChangeCode} value={this.state.code} required/>
                    <input type="submit" value="Verify" className='submit'/>
                    </form>
                </div>
            </div>
        );
    }
}

export default VerifyForm