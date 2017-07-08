/**
 * Created by Administrator on 2017/7/7 0007.
 */
/**
 * Created by Administrator on 2017/7/6 0006.
 */
import React, { Component } from 'react';
import "../static/css/cart.css";
import $ from "jquery";
import { Menu, Dropdown, Button ,Icon} from 'antd';
// import Footer from "./footer";
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
        </Menu.Item>
    </Menu>
);

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
            <div className="card-warp">
                <div className="carts">
                    <div className="cart-content">
                        <div className="cart-header">
                            <span className="cart-header-left" >购物车</span>
                            <span className="cart-header-right">清空</span>
                        </div>
                        <ul>
                            {
                                this.props.msg.map((val1,key)=>{
                                    // console.log(val1);
                                    return <div>
                                    {
                                        val1.foods.map((value1,key2)=>{

                                            if(value1.count>0){
                                                return <li>
                                                    <span className="foods-title">{value1.name}</span>
                                                    <span className="foods-cart-num">
                                <b>{value1.price}</b>
                                 <Icon type="minus-circle-o"  onClick={this.props.delete.bind(this,[key2,key])}/>
                                                            <div className="cartNum" ref="goodsNum">{value1.count}</div>
                                                            <Icon type="plus-circle" onClick={this.props.add.bind(this,[key2,key])}/>
                            </span>
                                                </li>
                                            }




                                        })
                                    }
                                    </div>
                                })
                            }

                        </ul>
                        {/*<div className="cart-content-header"></div>*/}
                        {/*<Dropdown overlay={menu} placement="topCenter" trigger={['click']}>*/}
                        {/*<Button>topCenter</Button>*/}
                        {/*</Dropdown>*/}
                    </div>
                </div>
                <div className="shadow">

                </div>
            </div>



        )
    }
}
export default Detail