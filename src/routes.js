import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Cart from './components/Cart';
import Login from './components/auth/Login';
import Failure from './components/auth/Failure';
import Item from './components/itemView/item';
import Account from './components/account/account';
import FittingRoom from './components/vr/FittingRoom';
import CheckoutVR from './components/vr/CheckoutVR';
import Hollywood from './components/vr/Hollywood';

export default () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/men' component={Men} />
            <Route path='/women' component={Women} />
            <Route path='/kids' component={Kids} />
            <Route path='/cart' component={Cart} />
            <Route path='/login' component={Login} />
            <Route path='/failure' component={Failure} />
            <Route path='/item/:id' component={Item} />
            <Route path='/account' component={Account}/>
            <Route path='/fittingroom' component={FittingRoom}/>
            <Route path='/checkout' component={CheckoutVR}/>
            <Route path='/hollywood' component={Hollywood}/>
        </Switch>
    )
}