import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SideMenu extends React.Component {
    render() {
        if(this.props.visible){
            return(
                <ul className="side-menu">
                    <li><Link to="/top" id='side-top'>トップ</Link></li>
                    <li>日報・週報管理</li>
                    <li>
                        <ul className='heading1'>
                            <li>日報</li>
                            <li>週報</li>
                        </ul>
                    </li>
                    <li>ナレッジ管理</li>
                    <li>管理向け</li>
                    <li>
                        <ul className='heading1'>
                            <li>組織</li>
                            <li>権限管理</li>
                        </ul>
                    </li>
                </ul>
            )
        }
        else if(!this.props.visible){
            return(
                <React.Fragment/>
            )
        }
    }
}

const mapStateToProps = state => ({
    visible: state.menuReducer.visible
});

export default connect(mapStateToProps)(SideMenu);