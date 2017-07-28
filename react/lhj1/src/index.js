import React from 'react';
import ReactDOM from 'react-dom';
import "./component/static/css/index.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,Link,IndexRoute,browserHistory} from 'react-router'
import Order from './component/order';
import User from './component/user';
import Collection from './component/user/collection';
import Login from './component/user/Login';
import Reg from "./component/user/Reg";
import Reg1 from "./component/user/Reg1";
import Reg2 from "./component/user/Reg2";
import Find from './component/find';
import Search from './component/search';
import Home from "./component/home";
import Seller from "./component/home/seller";
import Detail from "./component/detail";
import Collect from "./component/collect";
ReactDOM.render(
<Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}>

        </Route>
        <Route path="find" component={Find}>

        </Route>
        <Route path="order" component={Order}>

        </Route>
        <Route path="user" component={User}>

        </Route>
        <Route path="user/collection" component={Collection}></Route>
        <Route path="user/login" component={Login}></Route>
        <Route path="login" component={Login}></Route>
          <Route path="reg" component={Reg}></Route>
        <Route path="user/reg" component={Reg}></Route>
        <Route path="reg1" component={Reg1}></Route>
        <Route path="user/reg1" component={Reg1}></Route>
        <Route path="reg2" component={Reg2}></Route>
        <Route path="user/reg2" component={Reg2}></Route>
        <Route path="user/collect" component={Collect}></Route>
        <Route path="/quite" component={User}></Route>
          <Route path="seller/:aid" component={Seller}></Route>
        {/*<Route path="seller" component={Seller}></Route>*/}
           <Route path="search" component={Search}></Route>
        <Route path="detail" component={Detail}></Route>
    </Route>
</Router>, 
document.getElementById('root')
);
registerServiceWorker();
