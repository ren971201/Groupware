import React from 'react';
import {
  // HashRouter as Router,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Layout from '../layout/Layout.jsx';
import LoginForm from '../login/LoginForm.jsx';
import TopPage from '../topPage/TopPage.jsx';
import RegisterForm from '../register/RegisterForm.jsx';
import VerifyForm from '../verify/VerifyForm.jsx';

function App() {
  return (
    <Router>
        <div className="app">
            <Layout>
              <Switch>
                  <Route exact path="/" component={LoginForm}/>
                  <Route exact path="/register" component={RegisterForm}/>
                  <Route exact path="/verify" component={VerifyForm}/>
                  <Route exact path="/top" component={TopPage}/>
              </Switch>
            </Layout>
        </div>
    </Router>
  );
}

export default App;
