import React, {Children, Component} from 'react';
import './LoginTemplate.css'
import Login from './Login'
import LoginSignUp from './LoginSignUp'
//import SearchRouter from '../Routes/SearchRouter'
import {Route, Switch, BrowserRouter,Link} from 'react-router-dom'

const LoginTemplate = (props) =>{
    return(
        <main className="LoginTemplate">
            <div className="top">
                <div className="title">
                    <Link to= '/login'>회원가입/로그인</Link>
                </div>
            </div>
            <section className="products-wrapper">
                <div>
                    <Switch>
                        <Route path={`/login/signup`} component={LoginSignUp} />
                        <Route exact = {true} path={`/login`} render={()=><Login LoginHandler = {props.LoginHandler}/>}/>
                    </Switch>
                </div>   
            </section>
        </main>
    )
    
}

export default LoginTemplate;

