import React, {Component} from 'react';
import PorderItem from './PorderItem';
import './PorderList.css'

class PorderList extends Component{

    state={
        input: '',
        items: [
            {
                id : 1254,
                name : "test product",
                tag : "tag1, tag2, tag3, tag4",
                price : 25000,
                photo : "",
                orderdate : "2020-11-11",
                cancel : false,
                completed : true,
                address : "경기도 성남시 분당구 정자동 상록마을 11동 11호",
                provider : "kdysy1130"
            },
            {
                id : 1254,
                name : "test product",
                tag : "tag1, tag2, tag3, tag4",
                price : 25000,
                photo : "",
                orderdate : "2020-11-11",
                cancel : true,
                completed : false,
                address : "경기도 성남시 분당구 정자동 상록마을 11동 11호",
                provider : "kdysy1130"
            },
            {
                id : 1254,
                name : "test product",
                tag : "tag1, tag2, tag3, tag4",
                price : 25000,
                photo : "",
                orderdate : "2020-11-11",
                cancel : true,
                completed : false,
                address : "경기도 성남시 분당구 정자동 상록마을 11동 11호",
                provider : "kdysy1130"
            },
            {
                id : 1254,
                name : "test product",
                tag : "tag1, tag2, tag3, tag4",
                price : 25000,
                photo : "",
                orderdate : "2020-11-11",
                cancel : false,
                completed : false,
                address : "경기도 성남시 분당구 정자동 상록마을 11동 11호",
                provider : "kdysy1130"
            },
            {
                id : 1254,
                name : "test product",
                tag : "tag1, tag2, tag3, tag4",
                price : 25000,
                photo : "",
                orderdate : "2020-11-11",
                cancel : false,
                completed : false,
                address : "경기도 성남시 분당구 정자동 상록마을 11동 11호",
                provider : "kdysy1130"
            },
            {
                id : 1254,
                name : "test product",
                tag : "tag1, tag2, tag3, tag4",
                price : 25000,
                photo : "",
                orderdate : "2020-11-11",
                cancel : false,
                completed : false,
                address : "경기도 성남시 분당구 정자동 상록마을 11동 11호",
                provider : "kdysy1130"
            }
        ]
    }

    render(){
        const items = this.state.items
        const itemList = items.map(
                ({id,name,tag,price,photo,orderdate,cancel, completed, address, provider}) =>(
                    <PorderItem id={id} name={name} tag={tag} price={price} photo={photo}
                        orderdate={orderdate} cancel={cancel} completed={completed} address={address} provider={provider} />
                )
            );
        return(
            <div className="OrderList">
                {itemList}
            </div>
        )
    }
}

export default PorderList;