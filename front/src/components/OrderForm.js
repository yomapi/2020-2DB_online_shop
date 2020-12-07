import React, {Component} from 'react';
import './OrderForm.css';
import {Link} from 'react-router-dom';
import axios from 'axios'

class OrderForm extends Component{
    constructor(props){
        super(props)
        this.state={
            id: props.match.params.id
    
        }
    }
    
    _getInfo = async() =>{
        const res = await axios.get(`/products/${this.state.id}`);
        this.setState({
            name : res.data.name,
            discription : res.data.content,
            price : res.data.price,
            providerId : res.data.sellerId,
            tag : res.data.tag,
            registrationDate : res.data.createdAt,
            photo : (res.data.image === null ? null :'http://localhost:3000/'+res.data.image.url)
        })
    }

    componentDidMount(){
        this._getInfo()
    }


    handleChange=(e)=>{
        this.setState({address : e.target.value})
    }

    handleChange_others = (e) =>{
        this.setState({others : e.target.value})
    }


    onOrder=async()=>{
        const res = await axios.post(`/orders`, 
        {
            address : this.state.address,
            productId : this.state.id
        },
        {
            headers: {
                Authorization: this.props.token
            }
        });
    }
    
    onKeyPress=(e)=>{
        if(e.key === 'Enter'){
            this.onOrder();
        }
    }


    

    render(){
        const{id, providerId, name, discription, tag, price, registrationDate} = this.state;
        
        return(
            <div className="info-wrapper">
                <div className="info-box">
                    <div className = "Left">
                        <div className = "Info">
                            <div className = "info-item-name">[{name}]</div>
                            <div className = "info-price"><span className="tag-pod">price</span> {price} won</div>
                            <div className = "order-info-discription">
                                <div className = "order-info-header">상품정보</div>
                                <div className = "info-discription-wrapper">{discription}</div>
                                <div className="tag-wrapper"><div className = "info-tag"># {tag}</div></div>
                                <div className = "provide">
                                    <div className = "providerId"> <span className="tag-pod">판매자</span> {providerId} </div>
                                    <div className = "registrationDate"><span className="tag-pod">등록일</span> {registrationDate}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-Right">
                        <div className = "order-info-box">
                        <div className = "order-info-header">주문정보</div>
                            <div className="order-pod">
                                <span className="tag-pod">자택 주소</span>
                                    <input value={this.state.address} onChange={this.handleChange} onKeyPress={this.onKeyPress}/>
                            </div>
                            <div className="order-pod">
                                <span className="tag-pod">기타 사항</span>
                                <input value={this.state.others} onChange={this.handleChange_others} onKeyPress={this.onKeyPress}/>
                            </div>
                            <Link to ="/orders">
                                <div className="purchase-button" onClick={this.onOrder}>
                                    주문하기
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderForm;