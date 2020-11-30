import React, {Children, Component} from 'react';
import './OrderListTemplate.css'
import SearchForm from './SearchForm'
import OrderList from './OrderList'
import OrderItemInfo from './OrderItemInfo'
//import SearchRouter from '../Routes/SearchRouter'
import {Route, Switch, BrowserRouter,Link} from 'react-router-dom'

class OrderListTemplate extends Component{
    
    render(){
        return(
            <main className="orderTemplate">
                <div className="order-top">
                    <Link to="/orders"><div className="order-title">
                        주문 내역
                    </div></Link>
                    <section className="form-wrapper">
                        <div>
                            <SearchForm/>
                        </div>
                    </section>
                </div>
                <section className="orders-wrapper">
                    <div>
                        <Switch>
                            <Route exact = {true} path={`${this.props.match.url}`} component={OrderList}/>
                            <Route path={`${this.props.match.url}/:id`} component={OrderItemInfo} />
                        </Switch>
                    </div>   
                </section>
            </main>
        )
    }
    
}

export default OrderListTemplate;

