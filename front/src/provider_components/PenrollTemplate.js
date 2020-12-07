import React, {Children, Component} from 'react';
import './PenrollTemplate.css'
import Penroll from './Penroll'
import PenrollList from './PenrollList'
import PenrollItemInfo from './PenrollItemInfo'
import axios from 'axios'
//import UserInfoUpdate from './UserInfoUpdate'
import {Route, Switch, BrowserRouter,Link} from 'react-router-dom'

class PenrollTemplate extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
            searchby : "name"
        }
        this._getAllProductList()
    }

    onSearch = (items) =>{
        this.setState({
            items: items,
        })
    }

    _getAllProductList = async() =>{
        await this.setState({items:[]})
        const res = await axios.get('/provider/products',{
            headers: {
                Authorization: this.props.token
            }
        });
        res.data.map(
            ({id, name, price, tag, deletedAt,image}) =>(
                this.setState({items : this.state.items.concat({id:id , name:name, price:price, tag:tag, photo : (image === null ? null :'http://localhost:3000/'+image.url), deletedAt:deletedAt})})
            )
        )
    }


    render(){
        const props = this.props
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
                        <div className = "enroll-menu-item" onClick={this._getAllProductList}>
                            상품 등록
                        </div>
                        </Link>
                    </div>
                    <section className="products-wrapper">
                        <div>
                            <Switch>
                                <Route path={`${props.match.url}/list/:id`} component={PenrollItemInfo}/>
                                <Route path={`${props.match.url}/list`} render={()=><PenrollList items = {this.state.items}/>}/>
                                <Route exact = {true} path={`${props.match.url}`} render={()=><Penroll token = {this.props.token}/>}/>
                            </Switch>
                        </div>   
                    </section>
                </main>
            )
        }
}

export default PenrollTemplate;

