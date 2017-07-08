import React,{Component} from 'react' ;
import "../static/css/reg.css";
import $ from "jquery";
import {Link} from 'react-router';
class Reg extends Component{
 constructor(props){
super(props)
this.state={

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
 render(){
return (
  <div className="reg">
  	<header>
			<Link to="user/login">
				<i className="iconfont">&#xe600;</i>
			</Link>
			注册
			<a href="#">密码登录</a>
		</header>
		<section id="main">
			<div className="phone">
				<input type="text" placeholder="手机号"/><button id="getprev">获取验证码</button>
			</div>
			<div className="prompt">
				温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<a href="#">《用户服务协议》</a>
			</div>
            <Link to="reg1" className="reg-next"><button id="nextstep">下一步</button></Link>
			
		</section>
		<section id="thirdlogin">
			<h5></h5>
			<div className="loginchannel">
				<ul>
					<li>
						<a href="#">
							<i className="iconfont">&#xe66d;</i>
							<p>微信</p>
						</a>	
					</li>
					<li>
						<a href="#">
							<i className="iconfont">&#xe67e;</i>
							<p>QQ</p>
						</a>	
					</li>
					<li>
						<a href="#">
							<i className="iconfont">&#xe668;</i>
							<p>微博</p>
						</a>	
					</li>
					<li>
						<a href="#">
							<i className="iconfont">&#xe601;</i>
							<p>淘宝</p>
						</a>	
					</li>
				</ul>
			</div>
		</section>
 </div>
 )
}
}
export default Reg