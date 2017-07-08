import React, { Component } from 'react';
import './component/static/css/antd.css';
import "./component/static/css/reset.css";
import "./component/static/css/common.css";
import $ from "jquery";
import Footer from "./component/footer";
import Order from './component/order';
import User from './component/user';
import Find from './component/find';
import Home from "./component/home";
class App extends Component {
  render() {
    return (
      <div className="App">
        
       
        {this.props.children}
        
      </div>
    );
  }
}

export default App;
