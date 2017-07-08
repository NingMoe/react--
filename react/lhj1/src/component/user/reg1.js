import React,{Component} from 'react' ;
import $ from "jquery";
import {Link} from 'react-router';
import "../static/css/reg1.css"
class Reg1 extends Component{
 constructor(props){
super(props)
this.state={

 }
}
componentDidMount(){
  $("html").css("font-size","62.5%"); 
 }
    
 render(){
return (
  <div className="reg-next">
    <header>
			<Link to="user/reg">
				<i className="iconfont">&#xe600;</i>
			</Link>
			注册
			<a href="#">密码登录</a>
		</header>
		<section id="main">
			<div className="prevnum">
				<input type="text" placeholder="验证码"/><span className="time">60S</span>
			</div>
			<div className="prompt">
				温馨提示：验证码已发送到<span>XXXXX</span>手机,输入验证码点击下一步完成注册
			</div>
            <Link to="reg2"  className="reg-next">
            	<button id="nextstep">下一步</button></Link>
		
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
export default Reg1