import React,{Component} from 'react' ;
import "../static/css/reg2.css";
import $ from "jquery";
class Reg2 extends Component{
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
  <div className="reg2">
  <header>
			<a href="#">
				<i className="iconfont">&#xe600;</i>
			</a>
			注册
			<a href="#"></a>
		</header>
		<section id="main">
			<div className="setinfo">设置登录密码后，可以使用手机号+密码登录，请牢记</div>
			<div className="setpassword">
				<input type="password" placeholder="密码" className="password"/>
			</div>	
			<div className="prevpwd">
				<input type="password" placeholder="确认密码" className="prevpassword"/>
			</div>
			<p className="passlength">密码长度6-20个字符</p>
			<button id="login">确定</button>
		</section>
 </div>
 )
}
}
export default Reg2