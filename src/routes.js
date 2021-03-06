import React, {Component} from 'react';
import Header from './components/Header';
import SearchResultPage from './components/SearchResultPage';
import history from './utils/history';
import Home from './components/Home';
import AddressPage from './components/AddressPage';
import Cart from './components/CartPage';
import AddAddressPage from './components/AddAddressPage';

import {Route, Router} from 'react-router';
import Login from './components/Login';

class Routes extends Component{
    render(){
        return(
            <div>
                <Router history={history}>
                    <Header></Header>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/list' component={SearchResultPage}></Route>
                    <Route exact path='/address' component={AddressPage}></Route>
                    <Route exact path='/add-address' component={AddAddressPage}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/cart' component={Cart}></Route>
                </Router>
            </div>
        );
    }
}

export default Routes;
