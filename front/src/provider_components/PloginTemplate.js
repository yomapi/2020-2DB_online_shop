import React, {Children, Component} from 'react';
import './PloginTemplate.css'
import Plogin from './Plogin'
import PloginSignUp from './PloginSignUp'
import {Route, Switch, BrowserRouter,Link} from 'react-router-dom'

const PloginTemplate = (props) =>{
    return(
        <main className="LoginTemplate">
            <div className="top">
                <div className="title">
                    <Link to= '/provider/login'>회원가입/로그인</Link>
                </div>
            </div>
            <section className="products-wrapper">
                <div>
                    <Switch>
                        <Route path={`${props.match.url}/signup`} component={PloginSignUp} />
                        <Route exact = {true} path={`${props.match.url}`} render={()=><Plogin LoginHandler = {props.LoginHandler}/>}/>
                    </Switch>
                </div>   
            </section>
        </main>
    )
    
}

export default PloginTemplate;

