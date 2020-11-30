import React, {Children, Component} from 'react';
import './PenrollTemplate.css'
import Penroll from './Penroll'
import PenrollList from './PenrollList'
import PenrollItemInfo from './PenrollItemInfo'
//import UserInfoUpdate from './UserInfoUpdate'
import {Route, Switch, BrowserRouter,Link} from 'react-router-dom'

const PenrollTemplate = (props) =>{
    return(
        <main className="UserInfoTemplate">
            <div className="top">
                <div className="title">
                    <Link to= '/provider/enroll/list'>상품 등록</Link>
                </div>
            </div>
            <div className = "enroll-menu">
                <Link to ="/provider/enroll/list">
                <div className = "enroll-menu-item">
                    등록 상품 목록
                </div>
                </Link>
                <Link to ="/provider/enroll">
                <div className = "enroll-menu-item">
                    상품 등록
                </div>
                </Link>
            </div>
            <section className="products-wrapper">
                <div>
                    <Switch>
                        <Route path={`${props.match.url}/list/:id`} component={PenrollItemInfo}/>
                        <Route path={`${props.match.url}/list`} component={PenrollList}/>
                        <Route exact = {true} path={`${props.match.url}`} component={Penroll}/>
                    </Switch>
                </div>   
            </section>
        </main>
    )
    
}

export default PenrollTemplate;

