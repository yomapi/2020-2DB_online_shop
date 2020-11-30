import React, {Children, Component} from 'react';
import './SearchTemplate.css'
import SearchForm from './SearchForm'
import SearchItemList from './SearchItemList'
import SearchItemInfo from './SearchItemInfo'
import OrderForm from './OrderForm'
//import SearchRouter from '../Routes/SearchRouter'
import {Route, Switch, BrowserRouter,Link} from 'react-router-dom'

const SearchTemplate = (props) =>{
    return(
        <main className="SearchTemplate">
            <div className="top">
                <Link to="/search"><div className="title">
                    상품 검색
                </div></Link>
                <section className="form-wrapper">
                    <div>
                        <SearchForm/>
                    </div>
                </section>
            </div>
            <section className="products-wrapper">
                <div>
                    <Switch>
                        <Route path={`${props.match.url}/:id/purchase`} component={OrderForm} />
                        <Route path={`${props.match.url}/:id`} component={SearchItemInfo} />
                        <Route exact = {true} path={`${props.match.url}`} component={SearchItemList}/>
                    </Switch>
                </div>   
            </section>
        </main>
    )
    
}

export default SearchTemplate;

