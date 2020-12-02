import React, {Children, Component} from 'react';
import './PorderListTemplate.css'
import SearchForm from '../components/SearchForm'
import PorderList from './PorderList'
import PorderItemInfo from './PorderItemInfo'
//import SearchRouter from '../Routes/SearchRouter'
import {Route, Switch, BrowserRouter,Link} from 'react-router-dom'

class PorderListTemplate extends Component{
    
    render(){
        return(
            <main className="orderTemplate">
                <div className="order-top">
                    <Link to="/provider/orders"><div className="order-title">
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
                            <Route exact = {true} path={`${this.props.match.url}`} component={PorderList}/>
                            <Route path={`${this.props.match.url}/:id`} render={(props)=><PorderItemInfo token={this.props.token} userId={this.props.userId} match={this.props.match}/>} />
                            {console.log(this.props.userId)}
                        </Switch>
                    </div>   
                </section>
            </main>
        )
    }
    
}

export default PorderListTemplate;

