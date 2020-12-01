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
                ({id,name,tag,price,photo}) =>(
                    <SearchItem id={id} name={name} tag={tag} price={price} photo={photo}/>
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