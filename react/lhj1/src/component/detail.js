/**
 * Created by Administrator on 2017/7/6 0006.
 */
import React, { Component } from 'react';
// import "../component/static/css/lhj-find.css";
import $ from "jquery";
// import Footer from "./footer";
import "./static/css/shopping.css";
import {Icon} from "antd";
class Detail extends Component {
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
        <div className="datail">
            <div className="detail-header">
                商品详情
                <div className="start">
                    <Icon type="star-o" />
                    <span>收藏</span>
                </div>
            </div>
        </div>



        )
    }
}
export default Detail