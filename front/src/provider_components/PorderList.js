import React, {Component} from 'react';
import PorderItem from './PorderItem';
import './PorderList.css'

class PorderList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {items} = this.props;
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