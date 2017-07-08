/**
 * Created by Administrator on 2017/7/6 0006.
 */
import React, { Component } from 'react';
import {Link} from "react-router";
import $ from "jquery";
class Loading extends Component {
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
            <div className='Loading'>
                <div className="load-top">

                </div>
                <div className="load-bot">

                </div>
            </div>

        )
    }
}
export default Loading