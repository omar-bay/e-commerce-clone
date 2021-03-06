import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home'
import Checkout from './components/Checkout'

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/checkout">    {/* path="/checkout/:something/page" */}
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/login">
                        <h1>Login</h1>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            {/* REACT-ROUTER */}

            {/* localhost.com/ */}
            {/* localhost.com/checkout */}
            {/* localhost.com/login */}
            </div>
        </Router>
    )
}

export default App
