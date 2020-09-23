import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from '../header/Header.jsx';
import SideMenu from '../sideMenu/SideMenu.jsx';
import LoginForm from '../login/LoginForm.jsx';
import TopPage from '../topPage/TopPage.jsx';
import RegisterForm from '../register/RegisterForm.jsx';
import VerifyForm from '../verify/VerifyForm.jsx';

function App() {
  return (
    <Router>
        <div className="App">
            <Header />
            <div className='contents'>
              <SideMenu />    
              <Switch>
                  <Route exact path="/" component={LoginForm}/>
                  <Route exact path="/register" component={RegisterForm}/>
                  <Route exact path="/verify" component={VerifyForm}/>
                  <Route exact path="/top" component={TopPage}/>
              </Switch>
            </div>
        </div>
    </Router>
  );
}

export default App;
