import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import Login from './components/auth/Login';
import Failure from './components/auth/Failure';

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/men' component={Men} />
            <Route path='/women' component={Women} />
            <Route path='/kids' component={Kids} />
            <Route path='/cart' component={Cart} />
            <Route path='/favorites' component={Favorites} />
            <Route path='/login' component={Login} />
            <Route path='/failure' component={Failure} />
        </Switch>
    )
}