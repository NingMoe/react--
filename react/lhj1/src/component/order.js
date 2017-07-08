import React,{Component} from 'react' ;
import $ from "jquery";
import {Link,browserHistory} from "react-router"
import "./static/css/orders.css";
import Footer from "./footer";
import  Allorder from "./allorders"
import  axios from "axios";
import Storage from "./model/storage";
import "./static/css/orders_all.css";
import Md5 from "md5"
class Order extends Component{
 constructor(props){
super(props)
this.state={
        flag:0,
        orderLength:0,
        data:[]
 }
 this.show=this.show.bind(this);
     this.ajax=this.ajax.bind(this);
}
show(){
    console.log(this.state.orderLength);
    var $hasOrder=$(".all-orders");
    var $noOrderTop=$(".orders_top");
    var $noOrderCenter=$(".orders_center");
    $("html").css("font-size","625%");
    var usercol=Storage.get("userinfo");
    if(usercol){

        this.refs.nologin.className=" no_log_content none"
        this.refs.login.className="login_content block"
    }else{
        this.refs.nologin.className=" no_log_content block"
        this.refs.login.className="login_content none"
    }
    if(this.state.orderLength>0){
        $hasOrder.show();
        $noOrderTop.hide()
        $noOrderCenter.hide()
    }else{
        $hasOrder.hide();
        $noOrderTop.show()
        $noOrderCenter.show()
    }

}
ajax(){
        if(Storage.get("userinfo")){
            var usercol=Storage.get("userinfo");
            var username=usercol[0].username;
            var password=usercol[1].password
            var sign=Md5(username+password);
            var _that=this
            axios.post('http://localhost:8000/api/order',{
                user:usercol,
                sign:sign
            }).then(function (response) {

                _that.setState({
                    data:response.data,
                    orderLength:response.data.length
                })

            })
                .catch(function (error) {
                    console.log(error);
                });
        }

}
componentWillMount(){
    this.ajax()
}
componentDidMount(){

    this.show()

     }
 render(){
     var $hasOrder=$(".all-orders");
     var $noOrderTop=$(".orders_top");
     var $noOrderCenter=$(".orders_center");
     console.log(this.state.orderLength);
     if(this.state.orderLength>0){
         $hasOrder.show();
         $noOrderTop.hide()
         $noOrderCenter.hide()
     }else{
         $hasOrder.hide();
         $noOrderTop.show()
         $noOrderCenter.show()
     }

     return (
  <div id="order">
    <div className="order-header">
    <h2>订单</h2>
</div>

<div className="no_log_content" ref="nologin">
    <img src="https://fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif" alt="" /><br />
    <span>登录后查看外卖订单</span><br/>
    <Link to="login">
        <button>立即登录</button>
    </Link>
    
</div>


<div className="login_content" ref="login">
    <Allorder ref="order"  data={this.state.data}/>
    <div className="orders_top" ref="ordertop">
        <h4>我的订单 <span>全部订单 &gt;</span></h4>
            <div className="record">
                <img src={require("./static/img/record.jpg")} alt="" />
                <h3>近三个月无外卖订单记录</h3>
                <p>
                    查看三个月前的外卖订单
                </p>
            </div>
    </div>
    <div className="orders_center" ref="ordercenter">
        <h4>附近买过 </h4>
        <div className="seller1">
            <img src={require("./static/img/seller.jpg")} alt="" />
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