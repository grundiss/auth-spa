import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {AuthenticationContext, User, Protected} from './AuthenticationContex';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <AuthenticationContext.Provider value={new User()}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SplashScreen}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/dashboard" component={Protected(Dashboard)}/>
        </Switch>
      </BrowserRouter>
    </AuthenticationContext.Provider>
  );
}
