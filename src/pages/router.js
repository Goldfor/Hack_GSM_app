import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route }from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import App from './App/App'
import Reg from '../components/Reg/reg'
import NF from './NF/NF'

class Rout extends Component {
    render() {
        return (
            <CookiesProvider>
                <Router>
                    <Switch>
                        <Route exact path='/' isExact component={App} />
                        <Route exact path='/reg' component={Reg} />
                        <Route component={NF} />
                    </Switch>
                </Router>
            </CookiesProvider>
        )
    }
}

export default Rout;