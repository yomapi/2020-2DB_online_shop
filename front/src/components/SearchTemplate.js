import React, {Children, Component} from 'react';
import './SearchTemplate.css';
import SearchForm from './SearchForm';
import SearchItemList from './SearchItemList';
import SearchItemInfo from './SearchItemInfo';
import OrderForm from './OrderForm';
import axios from 'axios';
//import SearchRouter from '../Routes/SearchRouter';
import {Route, Switch, BrowserRouter,Link} from 'react-router-dom';

class SearchTemplate extends Component{

    constructor(props){
        super(props);
        this.state = {
            items : [],
            searchby : "name"
        }
    }

    onSearch = (items) =>{
        this.setState({
            items: items,
        })
    }

    _getAllProductList = async() =>{
        const res = await axios.get('/products');
        res.data.map(
            ({id, name, price, tag}) =>(
                this.setState({items : this.state.items.concat({id:id , name:name, price:price, tag:tag, photo : "https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"})})
            )
        )
    }

    componentDidMount(){
        this._getAllProductList();
    }

    render(){
        const ptoken = this.props.token
        console.log("?",ptoken)
        return(
            <main className="SearchTemplate">
                <div className="top">
                    <Link to="/search"><div className="title">
                        상품 검색
                    </div></Link>
                    <section className="form-wrapper">
                        <div>
                            <SearchForm onSearch = {this.onSearch} searchby = {this.state.searchby} from = "product"/>
                        </div>
                    </section>
                </div>
                <section className="products-wrapper">
                    <div>
                        <Switch>
                            <Route path={`/search/:id/purchase`} render={(props)=><OrderForm match={props.match} token={ptoken}/>} />
                            <Route path={`/search/:id`} render={(props)=><SearchItemInfo match={props.match} token={ptoken}/>}/>
                            <Route exact = {true} path={`/search`} render={()=><SearchItemList items={this.state.items}/>}/>
                            {console.log("render",this.state.items)}
                        </Switch>
                    </div>   
                </section>
            </main>
        )
    }
}

export default SearchTemplate;

