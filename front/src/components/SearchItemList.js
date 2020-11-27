import React, {Component} from 'react';
import SearchItem from './SearchItem';
import axios from 'axios'
import './SearchItemList.css'

class SearchItemList extends Component{
    constructor(props){
        super(props)
        this.state = {
            test : '',
            input: '',
            items: [
                {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},
                {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},
                {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},
                {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},
                {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},
                {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},
                {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},
                {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},{id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},{id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},{id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},{id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},{id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"}
            ]
        }
    }

    componentDidMount(){
        this.setState({items : []})
        this._getProductList();
    }

    _getProductList = async() =>{
        const res = await axios.get('/products');
        console.log(res.data);
        res.data.map(
            ({id, name, price, tag}) =>(
                this.setState({items : this.state.items.concat({id:id , name:name, price:price, tag:tag, photo : "https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"})})
            )
        )
    }

    state={
        
    }

    render(){
        const test = this.state.test
        const items = this.state.items
        const itemList = items.map(
                ({id,name,tag,price,photo}) =>(
                    <SearchItem id={id} name={name} tag={tag} price={price} photo={photo}/>
                )
            );
        return(
            <div className="ItemList">
                {test}
                {itemList}
            </div>
        )
    }
}

export default SearchItemList;