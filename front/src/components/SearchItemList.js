import React, {Component} from 'react';
import SearchItem from './SearchItem';
import axios from 'axios'
import './SearchItemList.css'

class SearchItemList extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        const {items} = this.props;
        const itemList = items.map(
                ({id,name,tag,price,photo,deletedAt}) =>(
                    <SearchItem id={id} name={name} tag={tag} price={price} photo={photo} deletedAt={deletedAt} />
                    
                )
            );
        return(
            <div className="ItemList">
                {itemList}
            </div>
        )
    }
}

export default SearchItemList;