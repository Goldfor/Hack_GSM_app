import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './style.scss'
import Store from './store'

@observer
class Login extends Component {
    
    changelog = ({target : {value}}) => {this.props.store.changelog(value); this.props.onChange(this.props.store);}
    changepass = ({target : {value}}) => {this.props.store.changepass(value); this.props.onChange(this.props.store);}
    
    render() {
        return (
            <div className='log-form'>
                <div className='data'>
                    <div>
                        Login
                    </div>
                    <input className='input' onChange={this.changelog}/>
                    <div>
                        Password
                    </div>
                    <input className='input' onChange={this.changepass}/>
                    <br/>
                </div>
            </div>
        )
    }

    
}

Login.defaultProps = {
    store: new Store()
}
export default Login;