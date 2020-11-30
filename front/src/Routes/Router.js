import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Home, SearchTemplate,notfound,OrderListTemplate,UserInfoTemplate,LoginTemplate} from './index';

const Router = () =>(
    <Switch>
        <Route exact path="/" component ={Home}/>
        <Route path="/search" component={SearchTemplate}/>
        <Route path ="/orders" component={OrderListTemplate}/>
        <Route path ="/user" component={UserInfoTemplate}/>
        <Route path ="/login" component={LoginTemplate}/>
        <Route exact path="*" component={notfound}/>
    </Switch>
)

export default Router;