import React, {Children, Component} from 'react';
import './UserInfoTemplate.css'
import UserInfo from './UserInfo'
import UserInfoUpdate from './UserInfoUpdate'
//import SearchRouter from '../Routes/SearchRouter'
import {Route, Switch, BrowserRouter,Link} from 'react-router-dom'

const UserInfoTemplate = (props) =>{
    return(
        <main className="UserInfoTemplate">
            <div className="top">
                <div className="title">
                    <Link to= '/user'>회원정보</Link>
                </div>
            </div>
            <section className="products-wrapper">
                <div>
                    <Switch>
                        <Route path={`${props.match.url}/update`} component={UserInfoUpdate} />
                        <Route exact = {true} path={`${props.match.url}`} component={UserInfo}/>
                    </Switch>
                </div>   
            </section>
        </main>
    )
    
}

export default UserInfoTemplate;

