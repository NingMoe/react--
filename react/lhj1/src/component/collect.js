import React, { Component } from 'react';

import {Link,browserHistory} from "react-router";
import $ from "jquery";
import '../component/static/css/swiper.css';
import Footer from "./footer";
import Loading from "./loading";
import { Rate } from 'antd';
import axios from "axios";
import Storage from "./model/storage"
class Collect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr:[],
            arr1:[],
            arr2:[]
        }
        this.ajax=this.ajax.bind(this)
        this.link=this.link.bind(this)
        this.all=this.all.bind(this)
        this.goback=this.goback.bind(this)
    }
    componentWillMount(){
        $("body").css("margin",0)
        $("html").css("font-size","625%");

    }
    link(){

    }
    goback(){
        browserHistory.goBack()
    }
    all(){
        var _that=this;
        axios.get('http://localhost:8000/api/index')
            .then(function (response) {
                console.log(response.data.data);
                _that.setState({
                    arr:response.data.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    ajax(){
        var arr2=[]
        var _that=this;
        var user=Storage.get("userinfo")[0].username;
        axios.get('http://localhost:8000/api/collect',{"user":user})
            .then(function (response) {
                console.log(response);
                for(var i=0;i<response.data.data.length;i++){
                    arr2.push(response.data.data[i].id)
                }

                _that.setState({
                    arr1:arr2
                })
                // _that.setState({
                //     arr:response.data.data.reverse()
                // })

            })
            .catch(function (error) {
                console.log(error);
            });





    }
    componentDidMount(){
    this.all()
        //请求数据
        this.ajax();


    }
    render() {


        for(var i=0;i<this.state.arr.length;i++){

            for(var j=0;j<this.state.arr1.length;j++){

                if(this.state.arr[i]._id==this.state.arr1[j]){

                    this.state.arr2.push(this.state.arr[i])

                }
            }
        }
        console.log(this.state.arr2);
        return (
           <div className="collect">
               <div className="find-header">
                   <h1 onClick={this.goback}>收藏</h1>
               </div>
               <div className="content_orders-collect">
                   <div className="seller">
                       <div className="seller-header">
                           收藏商家
                       </div>
                       {

                           this.state.arr2.map((val,key)=>{
                               console.log(val);
                               // return <Link to={{pathname:"seller",query:{"id":val._id}}} className="seller-link" key={key}>
                               return <Link to={"/seller/"+val._id} className="seller-link" key={key}>
                                   <div className="seller">

                                       <div className="seller-content">
                                           <div className="seller-mark">
                                               <span>新店</span>
                                           </div>
                                           <div className="s-c-left">
                                               <img src={"http://127.0.0.1:8000/"+(val.img.slice(6))} alt="" />
                                           </div>
                                           <div className="s-c-right">
                                               <div className="s-c-r-t">
                                                   <div className="seller-title">
                                                       <span className="brand">品牌</span><h3 key={key}>{val.title}</h3>
                                                   </div>
                                                   <div className="assess">
                                                       <div className="start"><Rate disabled defaultValue={parseInt(val.old_price.split(",")[0])} /><span className="assess-num">{val.old_price.split(",")[0]}</span></div><strong>月售{val.old_price.split(",")[1]}单</strong>
                                                   </div>
                                                   <div className="price clear">
                                                       <ul className="clear">
                                                           <li>¥{val.price.split(",")[0]}起送</li>
                                                           <li>配送费¥{val.price.split(",")[1]}</li>
                                                           <li>¥{val.price.split(",")[2]}/人</li>
                                                       </ul>
                                                       <b>1.19km</b>

                                                   </div>

                                               </div>
                                               <div className="s-c-r-b">
                                                   <div className="seller-event-left">
                                                       <div className="seller-news">新用户下单立减17.0元</div>
                                                       <div className="seller-sub">满25减16，满50减25，满80减30</div>
                                                   </div>
                                                   <div className="seller-event-right">
                                                       三个活动
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>

                               </Link>
                           })
                       }


                   </div>

               </div>
               <footer>
                   <h3>展开超出范围的商家</h3>
               </footer>
           </div>
        )
    }
}
export default Collect