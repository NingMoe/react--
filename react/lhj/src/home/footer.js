import React, { Component } from 'react';
import {Link} from "react-router";
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='footer'>
                <ul>
                    <li>
                        <Link>
                            <i className='iconfont'></i>
                            <p></p>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i className='iconfont'></i>
                            <p></p>
                        </Link>
                    </li>
                     <li>
                        <Link>
                            <i className='iconfont'></i>
                            <p></p>
                        </Link>
                    </li>
                     <li>
                        <Link>
                            <i className='iconfont'></i>
                            <p></p>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Footer