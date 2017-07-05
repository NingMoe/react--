import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,Link,IndexRoute,browserHistory} from 'react-router'
import Home from "./component/home";
ReactDOM.render(
<Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}>

        </Route>
    </Route>
</Router>, 
document.getElementById('root')
);
registerServiceWorker();
