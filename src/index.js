import './index.css';
import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import ReactDOM from 'react-dom';
import Rout from './pages/router'

class Index extends Component {
  render() {
    return (
    <div style={{'width': '100%'}}>
      <DevTools />
      <Rout/>
    </div>)
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
