import React, {Component} from 'react';
import OrderItem from './OrderItem';
import './OrderList.css'

class OrderList extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        const {items} = this.props;
        const itemList = items.map(
                ({id,name,tag,price,photo,orderdate,cancel,completed, address, provider,orderCreatedAt}) =>(
                    <OrderItem id={id} name={name} tag={tag} price={price} photo={photo}
                        orderdate={orderdate} cancel={cancel} completed={completed} address={address} provider={provider} orderdate={orderCreatedAt}/>
                )
            );
        return(
            <div className="OrderList">
                {itemList}
            </div>
        )
    }
}

export default OrderList;