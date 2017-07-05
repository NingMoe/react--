import React, { Component } from 'react';
import "../component/static/css/user.css";
import $ from "jquery";
import {Link} from 'react-router';
import Footer from "./footer";
class User extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount(){   
         $("html").css("font-size","625%");
        
     }
  render() {
    return (
      <div id="user">
        <div className="user-header">
    <h2>我的
        <i className="iconfont">&#xe77e;</i>
        <i className="iconfont">&#xe65a;</i>
    </h2>
</div>
<div className="user_info">
    <div className="user_info_header">
      <i className="iconfont">&#xe60d;</i>
    </div>
    <Link to="user/login" className="nologin">
        <div className="nologin">
        <h4>立即登录</h4>
        <p>登录后享更多特权</p>
        <i className="iconfont">&#xec6e;</i>
    </div>
    </Link>
    
    
    <div className="logined">
        <h4>xxxxx</h4>
        <p>133****3333</p>
        <i className="iconfont">&#xec6e;</i>
    </div>
</div>

<div className="nonav">
    <ul>
        <li>
            <i className="iconfont">&#xe615;</i>
            <span>钱包</span>
        </li>
        <li>
            <i className="iconfont">&#xe606;</i>
            <span>优惠</span>
        </li>
        <li>
            <i className="iconfont">&#xe644;</i>
            <span>积分</span>
        </li>
    </ul>
</div>

<div className="naved">
    <ul>
        <li>
            <i className="iconfont">0.00元</i>
            <span>钱包</span>
        </li>
        <li>
            <i className="iconfont">0个</i>
            <span>优惠</span>
        </li>
        <li>
            <i className="iconfont">0分</i>
            <span>积分</span>
        </li>
    </ul>
</div>

<div className="address">
    <ul>
        <li>
            <i className="iconfont">&#xe637;</i>
            <a>收货地址</a>
        </li>
         <Link to="user/collection">
        <li>
            <i className="iconfont">&#xe68d;</i>
            <p>我的收藏</p>
        </li>
        </Link>
    </ul>
</div>
<div className="ele">
    <ul>
        <li>
            <i className="iconfont">&#xe681;</i>
            <a>推荐有奖</a>
        </li>
        <li>
            <i className="iconfont">&#xe681;</i>
            <a>积分商城</a>
        </li>
        <li>
            <i className="iconfont">&#xe605;</i>
            <a>饿了么会员卡</a>
        </li>
    </ul>
</div>

     <Footer/>
  {this.props.children}
      </div>
    
    )
  }
}
export default User