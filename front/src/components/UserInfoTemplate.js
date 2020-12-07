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
                        <Route path={`/user/update`} render={()=><UserInfoUpdate token={props.token} userId={props.userId}/>} />
                        <Route exact = {true} path={`/user`} render={()=><UserInfo token={props.token} userId={props.userId}/>}/>
                    </Switch>
                </div>   
            </section>
        </main>
    )
    
}

export default UserInfoTemplate;

