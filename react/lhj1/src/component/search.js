import React, {Component} from 'react';
import "./static/css/lhj-search.css";
import {Link} from "react-router";
class Search extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div>
                <div className="header">
                    <Link to="home"><i className="iconfont arrow">&#xe600;</i></Link>

                    <div className="search">

                        <input type="text"/>
                        <div className="search-title">
                            <i className="iconfont">&#xe69d;</i> <b>搜索商家、商品名称</b></div>

                    </div>
                    <h1>搜索</h1>
                </div>
                <div className="search-hot search-hr">
                    <h2>历史搜索</h2>
                    <i className="iconfont">&#xe62d;</i>
                </div>
                <div className="search-content">
                    <a href="#">周黑鸭</a>
                    <a href="#">榴莲千层</a>
                </div>
                <div className="search-hot search-hr">
                    <h2>热门搜索</h2>

                </div>
                <div className="search-content">
                    <a href="#">周黑鸭</a>
                    <a href="#">榴莲千层</a>
                </div>
            </div>
        )
    }
}
export default Search   