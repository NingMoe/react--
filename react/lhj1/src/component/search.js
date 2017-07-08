import React, {Component} from 'react';
import "./static/css/lhj-search.css";
import {Link,browserHistory} from "react-router";
import Searchinput from "./searchinput";
import  $ from "jquery";
import  axios from "axios";
import Storage from "./model/storage";
import { Button, notification,Icon } from 'antd';

const openNotification = () => {
    notification.open({
        message: '警告',
        description: '没有查询到你需要的店铺，请重新输入',
        icon: <Icon type="frown-o" style={{color:"#0096ff"}} />,
    });
};
class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            his:"周黑鸭,榴莲千层"
        }
        this.search=this.search.bind(this);
        this.openNotification=this.openNotification.bind(this);
        this.clear=this.clear.bind(this)
    }
    componentDidMount(){
        var his=Storage.get("his")
        if(his){
            this.setState({
                his:his
            })
        }


    }
    openNotification = () => {
        notification.open({
            message: '警告',
            description: '没有查询到你需要的店铺，请重新输入',
            icon: <Icon type="frown-o" style={{color:"#0096ff"}} />,
        });
    };
    clear(){
        var storage=window.localStorage;

        Storage.set("his","");

    }
    search(){
      var _that=this
        if(this.refs.input.value!=""){
          var his=Storage.get("his")
            console.log(his);
            if(Storage.get("his")!=undefined){
              var his=Storage.get("his")
          }

            his+=","+this.refs.input.value
            Storage.set("his",his)
            axios.post("http://localhost:8000/api/search",{
                data:this.refs.input.value
            })
                .then(function(response){
                    console.log(response.data);
                    if(response.data!=404){
                        browserHistory.push(`/seller/${response.data[0]._id}`)
                    }else {
                        _that.openNotification()
                    }


                })
                .catch(function(error){
                    console.log(error);
                })
        }

    }

    render(){
        return (
            <div>
                <div className="header">
                    <Link to="home"><i className="iconfont arrow">&#xe600;</i></Link>

                    <div className="search">

                        <input type="text" placeholder="搜索商家、商品名称" ref="input"/>
                        <div className="search-title">
                            <i className="iconfont">&#xe69d;</i> </div>

                    </div>
                    <h1 >搜索</h1>
                    <Button type="primary" onClick={this.search} >Open the notification box</Button>
                </div>
                <div className="search-hot search-hr">
                    <h2>历史搜索</h2>
                    <i className="iconfont" onClick={this.clear}>&#xe62d;</i>
                </div>
                <div className="search-content">
                    {
                        this.state.his.split(",").map((val,key)=>{
                                    if(val!=""){
                                        return <a href="#">{val}</a>
                                    }

                        })
                    }

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