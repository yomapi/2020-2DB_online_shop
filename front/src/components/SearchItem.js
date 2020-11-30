import React, {Component} from 'react';
import './SearchItem.css';
import {Link} from 'react-router-dom';

class SearchItem extends Component{


    render(){
        const{id, name, tag, photo, price} = this.props;

        return(

            <Link to={`/search/${id}`}>
                <div className="item-wrapper">
                    <div className="search-item" >
                        <div className = "item-photo">
                            <img src={photo}/>
                        </div>
                        <div className = "discription">
                            <div className = "item-name">[{name}]</div>
                            <div className = "price"><span className = "pod">price</span> {price} won</div>
                            <div className = "tag"># {tag}</div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default SearchItem;