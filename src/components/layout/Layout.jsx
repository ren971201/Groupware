import React from 'react';

import Header from '../header/Header.jsx';
import SideMenu from '../sideMenu/SideMenu.jsx';

function Layout (props) {
    return(
        <div className="layout">
            <Header />
            <div className='contents'>
                <SideMenu />    
                {props.children}
            </div>
        </div>
    );
}

export default Layout;
