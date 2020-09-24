import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { invertVisible } from '../ActionCreater';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.doAction = this.doAction.bind(this);
    }

    doAction(e){
        e.preventDefault();
        this.props.changeForm(this.props.visible);
    }

    render() {
        return(
            <div className='header'>
                <button className="menu-btn" onClick={this.doAction}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1 className='titile'>ES本部グループウェア</h1>
                <button className='btn register'><Link to="/register">Register</Link></button>   
                <button className='btn login'><Link to="/">Login</Link></button>   
            </div>
        )
    }
}

const mapStateToProps = state => ({
    visible: state.menuReducer.visible
});

const mapDispatchToProps = dispatch  => {
    return {
        changeForm: (visible) => dispatch(invertVisible(visible))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);