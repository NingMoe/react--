import React, { Component } from 'react';
import {Link} from "react-router";
import $ from "jquery";
class Footer extends Component {
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
            <div className='footer'>
                <ul>
                    <li>
                        <Link to="/home" activeClassName="active" onlyActiveOnIndex={true}>
                            <i className='iconfont'>&#xe639;</i>
                            <p>外卖</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/find" activeClassName="active">
                            <i className='iconfont'>&#xe609;</i>
                            <p>发现</p>
                        </Link>
                    </li>
                     <li>
                        <Link to="/order" activeClassName="active">
                            <i className='iconfont icon-dingdan1'>&#xe60c;</i>
                            <p>订单</p>
                        </Link>
                    </li>
                     <li>
                        <Link to="/user" activeClassName="active">
                            <i className='iconfont'>&#xe604;</i>
                            <p>我的</p>
                        </Link>
                    </li>
                </ul>
            </div>
            
        )
    }
}
export default Footer