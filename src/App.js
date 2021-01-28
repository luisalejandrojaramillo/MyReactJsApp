import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from './routes/PrivateRoute'

import Login from './components/Login'
import MyInfo from './components/MyInfo'
import Marvel from './components/Marvel'
import PageNotFound from './components/PageNotFound'

function App(){
  const LoginView = () => <Login/>;
  const myInfoView = () => <MyInfo />;
  const notFoundView = () => <PageNotFound />
  const marvelView = () => <Marvel />

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginView} />
        <Route exact path="/login" component={LoginView} />
        <PrivateRoute exact path="/info" component={myInfoView} />
        <PrivateRoute exact path="/marvel" component={marvelView} />

        <Route component={notFoundView}/>
      </Switch>
    </Router>
);}
export default App;
