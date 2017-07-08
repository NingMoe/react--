/**
 * Created by Administrator on 2017/7/8 0008.
 */
import React, { Component } from 'react';
import "./static/css/orders_all.css";
import {Card} from "antd";
class Allorder extends Component {
    render() {

        return (
            <div className="all-orders">
                <div className="content">
                    <div className="content_top">
                        <h4>外卖</h4>
                    </div>
                    <div className="content_orders">
                        <ul>
                            {
                                this.props.data.map((val,key)=>{
                                    console.log(val);
                                    return <li key={key}>
                                        <Card   title={val.title} >
                                            <img src={val.image} alt="" />
                                            <h4>{val.name}<br/>{val.add_time}</h4>
                                            <p>￥{val.count*val.price}<br/><span>X  {val.count}</span></p>

                                        </Card>
                                    </li>
                                })
                            }



                        </ul>

                    </div>
                </div>
                <div className="all-footer">仅显示近一年外卖订单</div>
            </div>
        );
    }
}

export default Allorder;
