/**
 * Created by Administrator on 2017/7/7 0007.
 */
import React, { Component } from 'react';
import {Link,browserHistory} from "react-router";
import "./static/css/place_order.css";
import  $ from "jquery";
import  axios from "axios";
import Storage from "./model/storage";

class Place_order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user:"admin",
            goods:""
        }
        this.href=this.href.bind(this);
        this.buy=this.buy.bind(this)
    }
    href(){
        this.props.dom1()
    }
    buy(){
        this.props.loading()
        var collect=Storage.get("userinfo");
        var arr=[];
        var date=new Date()
         date=date.toLocaleString();
        this.props.goods.map((val,key)=>{
            val.foods.map((val1,key1)=>{

                if(val1.count>0){
                    val1.user=collect[0].username;
                    val1.serllId=this.props.id;
                    val1.add_time=date;
                    val1.title=this.props.seller.title
                    console.log(val1);
                    arr.push(val1);

                }

            })
        })



        axios.post('http://localhost:8000/api/buy',{
            data:arr
        }).then(function (response) {
            if(response.data.result){
                browserHistory.push(`/order`)
            }
        })
            .catch(function (error) {
                console.log(error);
            });

    }
    componentDidMount(){

    }
    componentWillUnmount(){


    }
    render() {

        return (
            <div className="place_order">
                <div id="header">
                    {/*<Link to={"/seller/"+this.props.id}onClick={this.props.dom1.bind(this)}>*/}
                    <div className="header-Return" onClick={this.href}>
                        <i className="iconfont">&#xe600;</i>
                    </div>
                    {/*</Link>*/}
                    <div className="header-title">
                        订单送至
                    </div>

                    <div > </div>
                </div>

                <div className="place-address">
                    <p className="address-top">深圳世纪东方老师</p>
                    <p className="Customer">史蒂夫 <span className="Telephone">123123123</span></p>
                </div>
                <div id="main">




                    <div className="Estimated-time">
                        <p className="Estimated-time-top">
                            <span> 尽快送达 | 预计12:06</span>
                        </p>
                    </div>
                    <div className="Payment-method">
                        <span>在线支付</span>
                    </div>


                    <div className="Order-information">
                        <div className="Order-information-title">
                            <img src={"http://127.0.0.1:8000/"+this.props.seller.img.slice(6)} alt="" />
            <span>
                {this.props.seller.title}
            </span>
                        </div>
                        <div className="Order-information-content">
                            <ul>
                                {
                                    this.props.goods.map((val,key)=>{
                                        return <div key={key}>
                                            {
                                                val.foods.map((val1,key1)=>{

                                                    if(val1.count>0){
                                                        return  <li className="Package-name" key={key1}>
                                                            <img src={val1.icon} alt=""/>
                                                            <div className="Package-name-left">
                                                                {val1.name}
                                                            </div>
                                                            <div className="Package-name-right">
                                                                <span className="num">x {val1.count}</span>
                                                                <span className="Total">¥ {val1.price*val1.count}</span>
                                                            </div>

                                                        </li>
                                                    }

                                            })
                                            }
                                        </div>
                                    })
                                }

                                <li className="Lunch-box">
                                    <div className="Lunch-box-left">
                                        餐盒
                                    </div>
                                    <div className="Lunch-box-right">

                                        <span className="Total">¥ 2</span>
                                    </div>
                                </li>
                                <li className="Delivery-fee">

                                    <div className="Delivery-fee-left">
                                        配送费
                                    </div>
                                    <div className="Delivery-fee-right">

                                        <span className="Total">¥ {this.props.seller.price.split(",")[1]}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="Order-note">
                        <div  className="Flavor">

                            <div>
                                订单备注
                            </div>
                            <div className="Flavor-right">
                                口味、偏好等
                            </div>


                        </div>

                        <div  className="invoice">

                            <div>
                                发票
                            </div>
                            <div>
                                商家不支持开发票
                            </div>


                        </div>
                    </div>
                </div>

                <div id="footer">
                    <div className="footer-inner">
                        <div className="money">
                            <span>¥{parseInt(this.props.money)+parseInt(this.props.seller.price.split(",")[1])+2}</span>
                        </div>
                        <div className="Settlement" onClick={this.buy}>
                            <span>  去结算</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Place_order