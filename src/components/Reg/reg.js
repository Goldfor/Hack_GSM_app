import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './style.scss'
import Store from './store'
import Axios from 'axios';
import axiosCookieJarSupport from 'axios-cookiejar-support';
import tough from 'tough-cookie';
import { message, Button } from 'antd'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { Link }from 'react-router-dom'
import 'antd/dist/antd.css'

axiosCookieJarSupport(Axios);

const cookieJar = new tough.CookieJar();

let ip = 'http://45.90.32.47:5000';

@observer
class Register extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props){
        super(props);

        this.state = {
        };
    }
    
    changelog = ({target : {value}}) => {this.props.store.changelog(value);}
    changepass = ({target : {value}}) => {this.props.store.changepass(value);}
    changepassr = ({target : {value}}) => {this.props.store.changepassr(value);}


    render() {
        return (
            <div style={{'width': '100%'}}>
            <div className='back-button'>
                <Link to={''}>{'<'}</Link>
            </div>
            <div className='reg-form'>
                <div className='data'>
                    <div>
                        Login
                    </div>
                    <input className='input' onChange={this.changelog}/>
                    <div>
                        Password
                    </div>
                    <input className='input' onChange={this.changepass}/>
                    <div>
                        Retry password  
                    </div>
                    <input className='input' onChange={this.changepassr}/>
                    <br/>
                    <Button type='primary' onClick={() => {
                    if (this.props.store.pass !== this.props.store.passr){
                        message.error('Password do not match');
                    }
                    else if(this.props.store.log === ''){
                        message.error('Login is empty');
                    }
                    else if(this.props.store.pass === ''){
                        message.error('Password is empty');
                    }
                    else
                    {
                        Axios.get(ip,{
                            params:{
                                method: 'register',
                                username: this.props.store.log,
                                pass: this.props.store.pass
                            },
                            jar: cookieJar
                        }).then((resp) => {
                            console.log(resp)
                            if(resp.data.status !== 'bat'){
                                console.log(cookieJar);
                                //this.props.cookies.set('sha512', this.props.store.pass);
                                //this.props.cookies.set('log', this.props.store.log);
                                //window.location.assign(window.location.origin)
                            }
                            else{
                                message.error('You not register');
                            }
                        });
                    }}}>Register</Button>
                </div>
            </div>
            </div>
        )
    }

    
}

Register.defaultProps = {
    store: new Store()
}
export default withCookies(Register);