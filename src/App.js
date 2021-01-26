import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './components/Login'
import MyInfo from './components/MyInfo'
import PageNotFound from './components/PageNotFound'

function App(){
  const [token,setToken] = useState();


  const LoginView = () => <Login/>;
  const myInfoView = () => <MyInfo />;
  const notFoundView = () => <PageNotFound />
  return (

  <Router>
    <Switch>
      <Route exact path="/" component={LoginView} />
      <Route exact path="/login" component={LoginView} />
      <Route exact path="/info" component={myInfoView} />

      <Route component={notFoundView}/>
    </Switch>
  </Router>
);}
export default App;
