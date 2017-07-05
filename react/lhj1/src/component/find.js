import React, { Component } from 'react';
import "../component/static/css/lhj-find.css";
import $ from "jquery";
import Footer from "./footer"
class Find extends Component {
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
      <div id="find">
           <div className="find-header">
        <h1>发现</h1>
    </div>
    <div className="find-nav">
        <ul className="clear">
            <li>
                <a href="#">
                    <span>
                        <h2>积分商城</h2>
                    <p>0元好物在这里！</p>
                    </span>
                    <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="" />
                </a>
            </li>
            <li>
                <a href="#">
                    <span>
                        <h2>美味爆料</h2>
                    <p>网红们都看哭了</p>
                    </span>
                    <img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/" alt="" />
                </a>
            </li>
            <li>
                <a href="#">
                   <span>
                        <h2>推荐有奖</h2>
                    <p>5元现金拿不停</p>
                   </span>
                    <img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" alt="" />
                </a>
            </li>
            <li>
                <a href="#">
                    <span>
                        <h2>免费流量</h2>
                    <p>每月最高500M</p>
                    </span>
                    <img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/" alt="" />
                </a>
            </li>
            <li>
                <a href="#">
                    <span>
                        <h2>有红包快抢</h2>
                    <p>礼包福利领不停</p>
                    </span>
                    <img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" alt="" />
                </a>
            </li>
        </ul>
    </div>
<div className="find-banner">
    <img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/" alt="" />

</div>
 <div className="find-recommend">
        <div className="find-recommend-header">
            <span>

            </span>
            <i className="iconfont">&#xe62b;</i>
            <h3>美食热推</h3>
            <span>

            </span>
        </div>
        <div className="find-recommend-title">
            你的口味，我都懂得
        </div>
        <div className="find-recommend-content">
            <ul className="clear">
                <li>
                    <a href="#">
                        <img src="https://fuss10.elemecdn.com/5/ee/79392709848185b5b426d1bf310f9jpeg.jpeg?imageMogr/format/webp/" alt="" />
                        <h4>特色捞面套餐-客家三及第汤</h4>
                        <p>¥24.9</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://fuss10.elemecdn.com/5/ee/79392709848185b5b426d1bf310f9jpeg.jpeg?imageMogr/format/webp/" alt="" />
                        <h4>特色捞面套餐-客家三及第汤</h4>
                        <p>¥24.9</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://fuss10.elemecdn.com/5/ee/79392709848185b5b426d1bf310f9jpeg.jpeg?imageMogr/format/webp/" alt="" />
                        <h4>特色捞面套餐-客家三及第汤</h4>
                        <p>¥24.9</p>
                    </a>
                </li>

            </ul>
        </div>
        <div className="find-recommend-footer">
            查看更多
        </div>
    </div>
   
    <div className="find-recommend">
        <div className="find-recommend-header">
            <span>

            </span>
            <i className="iconfont offer">&#xe798;</i>
            <h3>天天特价</h3>
            <span>

            </span>
        </div>
        <div className="find-recommend-title">
            特价商品，一网打尽
        </div>
        <div className="find-recommend-content">
            <ul className="clear">
                <li>
                    <a href="#">
                        <img src="https://fuss10.elemecdn.com/3/19/4ac3f7b16c5770785f56da397390djpeg.jpeg?imageMogr/format/webp/" alt="" />
                        <h4>特色捞面套餐-客家三及第汤</h4>
                        <p>¥24.9</p>
                        <b className="old-price">¥35</b>
                        <span className="offer-mark">3.4折</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://fuss10.elemecdn.com/3/19/4ac3f7b16c5770785f56da397390djpeg.jpeg?imageMogr/format/webp/" alt="" />
                        <h4>特色捞面套餐-客家三及第汤</h4>
                        <p>¥24.9</p>
                        <b className="old-price">¥35</b>
                        <span className="offer-mark">3.4折</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://fuss10.elemecdn.com/3/19/4ac3f7b16c5770785f56da397390djpeg.jpeg?imageMogr/format/webp/" alt="" />
                        <h4>特色捞面套餐-客家三及第汤</h4>
                        <p>¥24.9</p>
                        <b className="old-price">¥35</b>
                        <span className="offer-mark">3.4折</span>
                    </a>
                </li>

            </ul>
        </div>
        <div className="find-recommend-footer">
            查看更多
        </div>
    </div>
  
    <div className="find-recommend">
        <div className="find-recommend-header">
            <span>

            </span>
            <i className="iconfont offer">&#xe614;</i>
            <h3>限时好礼</h3>
            <span>

            </span>
        </div>
        <div className="find-recommend-title">
            小积分换豪礼
        </div>
        <div className="find-recommend-content">
            <ul className="clear">
                <li>
                    <a href="#">
                        <img src="https://fuss10.elemecdn.com/3/19/4ac3f7b16c5770785f56da397390djpeg.jpeg?imageMogr/format/webp/" alt="" />
                        <h4>特色捞面套餐-客家三及第汤</h4>
                        <p>399积分</p>
                        <b className="old-price">¥35</b>
                        <span className="offer-mark">抽奖活动</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://fuss10.elemecdn.com/3/19/4ac3f7b16c5770785f56da397390djpeg.jpeg?imageMogr/format/webp/" alt="" />
                        <h4>特色捞面套餐-客家三及第汤</h4>
                        <p>399积分</p>
                        <b className="old-price">¥35</b>
                        <span className="offer-mark">0元抽奖</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://fuss10.elemecdn.com/3/19/4ac3f7b16c5770785f56da397390djpeg.jpeg?imageMogr/format/webp/" alt="" />
                        <h4>特色捞面套餐-客家三及第汤</h4>
                        <p>399积分</p>
                        <b className="old-price">¥35</b>
                        <span className="offer-mark">0元抽奖</span>
                    </a>
                </li>

            </ul>
        </div>
        <div className="find-recommend-footer">
            查看更多
        </div>
    </div>
     <Footer/>
      </div>
    )
  }
}
export default Find