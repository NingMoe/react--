import React, { Component } from 'react';
import "../static/css/collection.css";
import $ from "jquery";
class Colletion extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
    componentDidMount(){   
            require("../static/css/index.css");
            if($(".login625")){
                $(".login625").remove()
            }
              
     }
  render() {
    return (
      <div className="colleciton">
        <div className="colleciton-header">
          <h2><i className="iconfont">&#xe600;</i>收藏</h2>
        </div>
        <div className="content_orders">
          <ul>
            <li>
              <img src="img/hw/orders1.jpg" alt="" />
              <h4>舌尖味道&gt;<span>取消收藏</span></h4>
              <span>2017-1-1</span>
              <p>土豆丝等7件商品 <br />
                <span>￥100块</span>
              </p>
            </li>
          </ul>

        </div>
        <footer>
          <h3>展开超出范围的商家</h3>
        </footer>
      </div>
    )
  }
}
export default Colletion