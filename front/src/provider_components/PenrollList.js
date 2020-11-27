import React, {Component} from 'react';
import PenrollItem from './PenrollItem';
import './PenrollList.css'

class PenrollList extends Component{

    state={
        input: '',
        items: [
            {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo", expired:true},
            {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},
            {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},
            {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},
            {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},
            {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},
            {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},
            {id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},{id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},{id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},{id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},{id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"},{id:1, name:"test_name", tag :"tag1, tag2, tag3, tag4", price : 25000, photo:"https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo", expired:true}
        ]
    }

    render(){
        const items = this.state.items
        const itemList = items.map(
                ({id,name,tag,price,photo,expired}) =>(
                    <PenrollItem id={id} name={name} tag={tag} price={price} photo={photo} expired={expired}/>
                )
            );
        return(
            <div className="ItemList">
                {itemList}
            </div>
        )
    }
}

export default PenrollList;