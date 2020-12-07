import React, {Children, Component} from 'react';
import './OrderListTemplate.css'
import SearchForm from './SearchForm'
import OrderList from './OrderList'
import OrderItemInfo from './OrderItemInfo'
//import SearchRouter from '../Routes/SearchRouter'
import {Route, Switch, BrowserRouter,Link} from 'react-router-dom'
import axios from 'axios'

class OrderListTemplate extends Component{

    constructor(props){
        super(props);
        this.state = {
            items : [],
            searchby : "name"
        }
    }

    componentDidMount(){
        this._getAllOrderList();
    }


    onSearch = (items) =>{
        this.setState({
            items: items,
        })
    }

    _getAllOrderList = async() =>{
        await this.setState({items : []})
        const res = await axios.get(`/user/${this.props.userId}/orders`, 
        {
            headers: {
                Authorization: this.props.token
        }});
        res.data.data.map(
            ({id, name, price, tag, status, productDeletedAt, address, orderDeletedAt,image,sellerId}) =>(
                this.setState({
                    items : this.state.items.concat({
                        id:id , 
                        name:name, 
                        price:price, 
                        tag:tag, 
                        photo : image, 
                        cancel : (orderDeletedAt==null && productDeletedAt==null ? false : true), 
                        address : address, 
                        completed :(status==1 ? true : false), 
                        provider: sellerId
                    })
                })
            )
        )
    }

    render(){
        return(
            <main className="orderTemplate">
                <div className="order-top">
                    <Link to="/orders"><div className="order-title" onClick={this._getAllOrderList}>
                        주문 내역
                    </div></Link>
                    <section className="form-wrapper">
                        <div>
                            <SearchForm token={this.props.token} userId={this.props.userId} onSearch={this.onSearch} from = "order" searchby="name"/>
                        </div>
                    </section>
                </div>
                <section className="orders-wrapper">
                    <div>
                        <Switch>
                            <Route exact = {true} path={`${this.props.match.url}`} render={()=><OrderList items={this.state.items}/>}/>
                            <Route path={`${this.props.match.url}/:id`} render={(props)=><OrderItemInfo items={this.state.items} token={this.props.token} userId={this.props.userId} match={props.match} getAll={this._getAllOrderList}/>} />
                        </Switch>
                    </div>   
                </section>
            </main>
        )
    }
    
}

export default OrderListTemplate;

