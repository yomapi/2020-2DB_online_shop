import React, {Component} from 'react';
import './PenrollItem.css';
import {Link} from 'react-router-dom';

class PenrollItem extends Component{


    render(){
        const{id, name, tag, photo, price,expired} = this.props;

        return(

            <Link to={`/provider/enroll/list/${id}`}>
                <div className="item-wrapper">
                    <div className={`search-item ${ expired ? 'expireditem' : '' }`} >
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

export default PenrollItem;