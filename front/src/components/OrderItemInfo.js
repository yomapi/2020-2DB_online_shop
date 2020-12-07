import React, {Component} from 'react';
import './OrderItemInfo.css';
import axios from 'axios'
import {Link} from 'react-router-dom';

class OrderItemInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            id : props.match.params.id,
        }
        this._getInfo()
    }

    handleCancelorder = async() =>{
        await axios.put(`/user/${this.props.userId}/orders/${this.props.match.params.id}`,{},{
            headers: {
                Authorization: this.props.token
        }});
        this.props.getAll()
    }

    _getInfo = async() =>{
        const res = await axios.get(`/user/${this.props.userId}/orders/${this.props.match.params.id}`,{
            headers: {
                Authorization: this.props.token
        }});
        this.setState({
            id: this.state.id,
            providerId:res.data.sellerId,
            name: res.data.name,
            discription:res.data.content,
            tag: res.data.tag,
            price:res.data.price,
            registrationDate:'2020-11-09[미구현]',
            photo: res.data.photo,
            orderdate : "2020-11-11[미구현]",
            cancel : (res.data.orderDeletedAt==null && res.data.productDeletedAt==null ? false : true),
            completed : (res.data.status === 1 ? true : false),
            address : res.data.address,
        })
        console.log(res.data)
    }

    render(){
        const{id, providerId, name, discription, tag, price, registrationDate, photo,orderdate,cancel,completed, address} = this.state;

        return(
            <div className={`info-wrapper ${ cancel ? 'canceledbox' : '' }${completed ? 'completedbox' : ''}`}>
                <div className={`info-box ${ cancel ? 'canceledbox' : '' }${completed ? 'completedbox' : ''}`}>
                    <div className = "info-photo">
                        <img src={photo}/>
                    </div>
                    <div className = "Right">
                        <div className = "Info">
                            <div className = "info-item-name">[{name}]{cancel ? '-취소됨' : ''}{completed ? '-완료됨' : ''}</div>
                            <div className = "info-price"><span className="tag-pod">price</span> {price} won</div>
                            <div className = "order-info-discription">
                                <div className = "order-info-header">상품정보</div>
                                <div className = "order-info-discription-wrapper">{discription}</div>
                                <div className="tag-wrapper"><div className = "info-tag"># {tag}</div></div>
                                <div className = "provide">
                                    <div className = "providerId"> <span className="tag-pod">판매자</span> {providerId} </div>
                                    <div className = "registrationDate"><span className="tag-pod">등록일</span> {registrationDate}</div>
                                </div>
                            </div>
                            <div className = "order-info">
                                <div className = "order-info-header">주문정보</div>
                                <div className = "purchaseDate"><span className="tag-pod">구매일</span> {orderdate}</div>
                                <div className = "purchaseDate"><span className="tag-pod">주소</span> {address}</div>
                            </div>
                        </div>
                        {
                            this.state.cancel||this.state.completed ? '' :
                            <Link to ='/orders'>
                            <div className = "purchase-button-2" onClick={this.handleCancelorder}>
                                주문취소
                            </div></Link>
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default OrderItemInfo;