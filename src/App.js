import React from 'react';
import './App.css';

import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Header from './components/Header';

export default function App() {

  return (
    <div>
      <Header />
      <Switch>
        {/* more pages to be added here later */}
        <Route component={HomePage} path='/' exact/>
        <Route component={ProductDetails} path='/products/:id'/>
        <Route component={ShoppingCart} path='/shoppingcart'/>
      </Switch>
    </div>
  );
}
