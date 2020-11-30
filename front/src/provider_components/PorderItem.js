import React, {Component} from 'react';
import './PorderItem.css';
import {Link} from 'react-router-dom';

class PorderItem extends Component{


    render(){
        const{id,name, tag, price, photo, orderdate, cancel, completed, address, provider} = this.props;

        return(
            <Link to={`/provider/orders/${id}`}>
                <div className="order-wrapper">
                    <div className={`order-item ${ cancel ? ' cancel' : '' } ${ completed ? ' completed' : '' }`} >
                        <div className = "order-photo">
                            <img src={photo}/>
                        </div>
                        <div className = "order-discription">
                            <div className ="name-price">
                                <div className = "order-item-name">[{name}]</div>
                                <div className = "order-price"><span className = "tag-pod">price</span> {price} won</div>
                            </div>
                            <div className = "order-others">
                                <div className = "address"><span className = "tag-pod">주소</span>{address}</div>
                                <div className = "provider"><span className = "tag-pod">판매자</span>{provider}</div>
                                <div className = "orderdate"><span className = "tag-pod">주문일자</span>{orderdate}</div>
                                <div className = "order-tag"><span className = "tag-pod">tags</span># {tag}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default PorderItem;