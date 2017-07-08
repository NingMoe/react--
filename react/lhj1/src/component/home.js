import React, { Component } from 'react';
import "../component/static/css/lhj-index.css";
import Swiper from "swiper";
import {Link,browserHistory} from "react-router";
import $ from "jquery";
import '../component/static/css/swiper.css';
import Footer from "./footer";
import Loading from "./loading";
import { Rate } from 'antd';
import axios from "axios"
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr:[]
        }
        this.ajax=this.ajax.bind(this)
        this.link=this.link.bind(this)
    } 
    componentWillMount(){
          $("html").css("font-size","625%");
    }
    link(){

    }
    ajax(){
        var _that=this;
        axios.get('http://localhost:8000/api/index')
            .then(function (response) {
                console.log(response.data.data);
                _that.setState({
                    arr:response.data.data.reverse()
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    componentDidMount(){
         var mySwiper = new Swiper ('.swiper-container', {

        loop:true,
//        autoplay: 5000,//可选选项，自动滑动
        pagination: '.swiper-pagination'


    });
      require("./static/css/index.css");
      
            if($(".login625")){

                
                for(var i=0;i<$(".login625").length+1;i++){
                    $(".login625").remove()
                }
            };

        //请求数据
        this.ajax();


    }
    render() {
        console.log(this.state.arr);
        return (
         <div id='home'>
             {/*<Loading/>*/}
                <div className="header-warp">
                <div className="header">
                    <Link to="search" className="bk index-search">
                        <div className="search">
                        <from>
                            <input type="text" placeholder="搜索商家、商品" />
                            <div className="search-title">
                                <i className="iconfont">&#xe69d;</i>
                                {/*<b>搜索商家、商品名称</b>*/}
                                </div>
                        </from>
                    </div>
                    </Link>
                    
                </div>
            </div>
            <div className="focus-warp">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="content">
                                <ul>
                                    <li>
                                        <a href="">
                                            <img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="" />
                                            <p>美食</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                        <img src="https://fuss10.elemecdn.com/8/a5/78332f1f7ff14afbb97b4f125911cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="" />
                                        <p>美食</p>
                                    </a>
                                    </li>
                                    <li>
                                        <a href="">
                                        <img src="img/lhj/img03.jpg" alt="" />
                                        <p>美食</p>
                                    </a>
                                    </li>
                                    <li>
                                        <a href="">
                                        <img src="img/lhj/img04.jpg" alt="" />
                                        <p>美食</p>
                                    </a>
                                    </li>
                                    <li>
                                        <a href="">
                                        <img src="img/lhj/img05.jpg" alt="" />
                                        <p>美食</p>
                                    </a>
                                    </li>
                                    <li>
                                        <a href="">
                                        <img src="img/lhj/img06.jpg" alt="" />
                                        <p>美食</p>
                                    </a>
                                    </li>
                                    <li>
                                        <a href="">
                                        <img src="img/lhj/img07.jpg" alt="" />
                                        <p>美食</p>
                                    </a>
                                    </li>
                                    <li><a href="">
                                        <img src="img/lhj/img08.jpg" alt="" />
                                        <p>美食</p>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="swiper-slide">       
                            <div className="content">
                            <ul>
                                <li><a href="">
                                    <img src="img/lhj/img01.jpg" alt="" />
                                    <p>美食</p>
                                </a></li>
                                <li><a href="">
                                    <img src="img/lhj/img02.jpg" alt="" />
                                    <p>美食</p>
                                </a></li>
                                <li><a href="">
                                    <img src="img/lhj/img03.jpg" alt="" />
                                    <p>美食</p>
                                </a></li>
                                <li><a href="">
                                    <img src="img/lhj/img04.jpg" alt="" />
                                    <p>美食</p>
                                </a></li>
                                <li><a href="">
                                    <img src="img/lhj/img05.jpg" alt="" />
                                    <p>美食</p>
                                </a></li>
                                <li><a href="">
                                    <img src="img/lhj/img06.jpg" alt="" />
                                    <p>美食</p>
                                </a></li>
                                <li><a href="">
                                    <img src="img/lhj/img07.jpg" alt="" />
                                    <p>美食</p>
                                </a></li>
                                <li><a href="">
                                    <img src="img/lhj/img08.jpg" alt="" />
                                    <p>美食</p>
                                </a></li>
                            </ul>
                        </div>
                        </div>

                    </div>

                    <div className="swiper-pagination"></div>

                </div>
            </div>
            <div className="banner">
                <img src={require("./static/img/banner.jpg")} alt="" />
            </div>
            <div className="nav">
                <ul>
                    <li>
                        <a href="">
                            <span>
                                <h2>满20减10</h2>
                                <b>广深大聚会</b>
                            </span>
                            <img src={require("./static/img/nav1.jpg")} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <h2>满20减10</h2>
                                <b>广深大聚会</b>
                            </span>
                            <img src={require("./static/img/nav1.jpg")} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <h2>满20减10</h2>
                                <b>广深大聚会</b>
                            </span>
                            <img src={require("./static/img/nav1.jpg")} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <h2>满20减10</h2>
                                <b>广深大聚会</b>
                            </span>
                            <img src={require("./static/img/nav1.jpg")} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="seller">
                <div className="seller-header">
                    推荐商家
            </div>
                {

                    this.state.arr.map((val,key)=>{
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
             <Footer/>
         </div>
         
        )
    }
}
export default Home