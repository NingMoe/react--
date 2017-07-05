import React,{Component} from 'react' ;
import $ from "jquery";
import {Link} from "react-router"
import "./static/css/orders.css";
import Footer from "./footer"
class Order extends Component{
 constructor(props){
super(props)
this.state={

 }
}
componentDidMount(){   
           $("html").css("font-size","625%");
        
     }
 render(){
return (
  <div id="order">
    <div className="order-header">
    <h2>订单</h2>
</div>

<div className="no_log_content">
    <img src="https://fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif" alt="" /><br />
    <span>登录后查看外卖订单</span><br/>
    <Link to="login">
        <button>立即登录</button>
    </Link>
    
</div>


<div className="login_content">
    <div className="orders_top">
        <h4>我的订单 <span>全部订单 &gt;</span></h4>
            <div className="record">
                <img src="./img/hw/record.jpg" alt="" />
                <h3>近三个月无外卖订单记录</h3>
                <p>
                    查看三个月前的外卖订单
                </p>
            </div>
    </div>
    <div className="orders_center">
        <h4>附近买过 </h4>
        <div className="seller1">
            <img src="./img/hw/seller.jpg" alt="" />
            <h3>附近暂无买过的商家</h3>
            <p>
                配送范围内买过的商家会出现在这里
            </p>
        </div>
    </div>
</div>


<div className="footer">
    <ul>
        <li><i className="iconfont">&#xe639;</i><span>外卖</span></li>
        <li><i className="iconfont">&#xe609;</i><span>发现</span></li>
        <li><i className="iconfont">&#xe647;</i><span>订单</span></li>
        <li><i className="iconfont">&#xe604;</i><span>我的</span></li>
    </ul>
    </div>
     <Footer/>
 </div>
 )
}
}
export default Order