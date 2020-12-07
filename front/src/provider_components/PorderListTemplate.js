import React, {Children, Component} from 'react';
import './PorderListTemplate.css'
import SearchForm from '../components/SearchForm'
import PorderList from './PorderList'
import PorderItemInfo from './PorderItemInfo'
import axios from 'axios'
//import SearchRouter from '../Routes/SearchRouter'
import {Route, Switch, BrowserRouter,Link} from 'react-router-dom'

class PorderListTemplate extends Component{
    
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
        const res = await axios.get(`/seller/${this.props.userId}/orders`, 
        {
            headers: {
                Authorization: this.props.token
        }});
        res.data.data.map(
            ({id, name, price, tag, status, productDeletedAt, address, orederDeletedAt,image,sellerId}) =>(
                this.setState({
                    items : this.state.items.concat({
                        id:id , 
                        name:name, 
                        price:price, 
                        tag:tag, 
                        photo : image, 
                        cancel : (orederDeletedAt==null && productDeletedAt==null ? false : true), 
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
                            <Route exact = {true} path={`${this.props.match.url}`} render={()=><PorderList items={this.state.items}/>}/>
                            <Route path={`${this.props.match.url}/:id`} render={(props)=><PorderItemInfo token={this.props.token} userId={this.props.userId} match={props.match} getAll={this._getAllOrderList}/>} />
                        </Switch>
                    </div>   
                </section>
            </main>
        )
    }
    
}

export default PorderListTemplate;

