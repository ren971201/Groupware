import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                <button className="menu-btn">
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

export default Header;