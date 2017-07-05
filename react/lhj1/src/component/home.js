import React, { Component } from 'react';
import "../component/static/css/lhj-index.css";
import Swiper from "swiper";
import {Link} from "react-router";
import $ from "jquery";
import '../component/static/css/swiper.css';
import Footer from "./footer"
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    } 
    componentWillMount(){
          $("html").css("font-size","625%");
    }
    componentDidMount(){
         var mySwiper = new Swiper ('.swiper-container', {

        loop:true,
//        autoplay: 5000,//可选选项，自动滑动
        pagination: '.swiper-pagination'


    });
      require("./static/css/index.css");
      
            if($(".login625")){
                console.log($(".login625"));
                
                for(var i=0;i<$(".login625").length+1;i++){
                    $(".login625").remove()
                }
            }
    }
    render() {
        return (
         <div id='home'>
                <div className="header-warp">
                <div className="header">
                    <Link to="search" >
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
                <img src="img/lhj/banner.jpg" alt="" />
            </div>
            <div className="nav">
                <ul>
                    <li>
                        <a href="">
                            <span>
                                <h2>满20减10</h2>
                                <b>广深大聚会</b>
                            </span>
                            <img src="img/lhj/nav1.jpg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <h2>满20减10</h2>
                                <b>广深大聚会</b>
                            </span>
                            <img src="img/lhj/nav1.jpg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <h2>满20减10</h2>
                                <b>广深大聚会</b>
                            </span>
                            <img src="img/lhj/nav1.jpg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <h2>满20减10</h2>
                                <b>广深大聚会</b>
                            </span>
                            <img src="img/lhj/nav1.jpg" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="seller">
                <div className="seller-header">
                    推荐商家
            </div>
           <Link to="seller" className="seller-link">
            
                <div className="seller-content">
                    <div className="seller-mark">
                        <span>新店</span>
                    </div>
                    <div className="s-c-left">
                        <img src="img/lhj/goods1.jpeg" alt="" />
                    </div>
                    <div className="s-c-right">
                        <div className="s-c-r-t">
                            <div className="seller-title">
                                <span className="brand">品牌</span><h3>尊宝披萨(后瑞店)</h3>
                            </div>
                            <div className="assess">
                                <div className="start"><img src="img/lhj/xx.png" alt="" />
                                    <img src="img/lhj/xx.png" alt="" />
                                    <img src="img/lhj/xx.png" alt="" />
                                    <img src="img/lhj/xx.png" alt="" />
                                    <img src="img/lhj/xx.png" alt="" /><span className="assess-num">4.5</span></div><strong>月售77单</strong>
                            </div>
                            <div className="price clear">
                                <ul className="clear">
                                    <li>¥30起送</li>
                                    <li>配送费¥4</li>
                                    <li>¥50/人</li>
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
            </Link>
                
            </div>
             <Footer/>
         </div>
         
        )
    }
}
export default Home