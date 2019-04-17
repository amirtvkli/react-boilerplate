import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Home from './app/home/home';

const AppRouter = () => 
    <Router>
        <Switch>
            <Route exact path='/' component={ Home }/>
        </Switch>
    </Router>

export default AppRouter