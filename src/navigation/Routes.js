import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import CartView from '../views/CartView';
import { CheckoutView } from '../views/CheckoutView';
import HomeView from '../views/HomeView';
import ItemView from '../views/ItemView';


const Routes = () => {
    return (
        <Switch>
            
            <Route exact path="/">
            <Header />
                <HomeView />
            </Route>
            <Route excat path="/cart">
            <Header />

                <CartView />
            </Route>
            <Route exact path="/pagar">
            <Header />

                <CheckoutView />
            </Route>
            <Route exact path="/item/:name">
            <Header />

                <ItemView />
            </Route>
        </Switch>
    )
}

export default Routes
