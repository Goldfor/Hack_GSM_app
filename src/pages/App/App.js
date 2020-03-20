import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Axios from 'axios';

import './App.css'

import Login from '../../components/Log/login'
import S_log from '../../components/Log/store'

var store_reg = new S_log();
let ip = 'http://45.90.32.47:5000';


class App extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props){
        super(props);

        const { cookies } = props;
        this.state = {
            sha512: cookies.get('sha512') || '0'
        };
    }



    render() {

        return (
            <div style={{'width': '100%'}}>
                <div style={{'width': '100%', textAlign: '-webkit-right'}}>
                <Login store={store_reg} onChange={({ log, sha}) => {
                    this.setState((prevd) => ({...prevd, sha512: sha}))
                    this.props.cookies.set('sha512', sha);
                    Axios.get(ip,{
                        params:{
                            method: 'login',
                            username: log,
                            pass: sha
                        }
                    }).then((resp) => {
                        console.log(resp)
                    });
                }}/>
                </div>
            </div>
        )
    }
}
export default withCookies(App);