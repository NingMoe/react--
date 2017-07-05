import React, { Component } from 'react';
import $ from "jquery";
import {Link} from 'react-router';
import "../../component/static/css/login.css"
import "../static/css/login.css"
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {

        $("html").css("font-size","62.5%");
        // require("../static/css/login.css")
//         $("head").append(`<style type="text/css" class="login625">
//          html{font-size: 62.5%!important}
       
// .footer{
//     width: 100%;
//     height: 4rem;
//     background-color: #fff;
//     -webkit-box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
//     box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
//     position: fixed;
//     padding-top: .3rem;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 9999;
//     color: #333;
// }
// .footer ul{
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: row;
// }
// .footer ul li{
//     flex:1;
  
// }
// .footer ul li a{
//     height: 100%;
//     display: block;
//     display: flex;
//      flex-direction: column;
//     justify-content: center;
//     align-items: center
   
// }
// .footer ul li a i{
//     font-size: 1.8rem;
// }
// .footer ul li a p{
//     font-size: .7rem;
//     transform: scale(.8);
// }
// .footer .active{
//     color: #2395ff;
// }
//          </style>`)
    }
    render() {
        return (

            <div className="login">
                <header>
                    <Link to="user"><i className="iconfont">&#xe600;</i></Link>
                        
                    
                    密码登录
			<a href="#"></a>
                </header>
                <section id="main">
                    <div className="phone">
                        <input type="text" placeholder="手机号/邮箱/用户名" />
                    </div>
                    <div className="password">
                        <input type="text" placeholder="密码" />
                    </div>
                    <button id="login">登录</button>
                    <p className="forget"><a href="#">忘记密码？</a></p>
                    <p className="forget"><Link to="reg">立即注册</Link></p>
                </section>
            </div>
        )
    }
}
export default Login