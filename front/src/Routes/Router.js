import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Home, SearchTemplate,notfound,OrderListTemplate,UserInfoTemplate,LoginTemplate} from './index';

const Router = (props) =>(
    <Switch>
        <Route exact path="/" component ={Home}/>
        <Route path="/search" render={()=><SearchTemplate token = {props.token} userId = {props.userId}/>}/>
        <Route path ="/orders" component={OrderListTemplate}/>
        <Route path ="/user" render={()=><UserInfoTemplate token = {props.token} userId = {props.userId}/>}/>
        <Route path ="/login" render={()=><LoginTemplate LoginHandler = {props.LoginHandler} token={props.token}/>}/>
        <Route exact path="*" component={notfound}/>
    </Switch>
)

export default Router;