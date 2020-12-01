import React, {Component} from 'react';
import './SearchItemInfo.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class SearchItemInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            id: props.match.params.id,
            providerId:'',
            name:'',
            discription:'',
            tag:'',
            price:0,
            registrationDate:'',
            photo:''
        };
        
    }
    

    _getInfo = async() =>{
        const res = await axios.get(`/products/${this.state.id}`);
        console.log(res.data);
        this.setState({
            name : res.data.name,
            discription : res.data.content,
            price : res.data.price,
            providerId : res.data.sellerId,
            tag : res.data.tag,
            registrationDate : res.data.createdAt,
            photo : 'https://i.pinimg.com/736x/eb/12/46/eb12465440ea39c8cd38bc31d73a1385.jpg'
        })
    }

    componentDidMount(){
        this._getInfo();
    }

    render(){
        const{id, providerId, name, discription, tag, price, registrationDate, photo} = this.state;

        return(
            <div className="info-wrapper">
                <div className="info-box">
                    <div className = "info-photo">
                        <img src={photo}/>
                    </div>
                    <div className = "Right">
                        <div className = "Info">
                            <div className = "info-item-name">[{name}]</div>
                            <div className = "info-price"><span className="tag-pod">price</span> {price} won</div>
                            <div className = "info-discription">
                                <div className = "order-info-header">상품정보</div>
                                <div className = "info-discription-wrapper">{discription}</div>
                                <div className="tag-wrapper"><div className = "info-tag"># {tag}</div></div>
                                <div className = "provide">
                                    <div className = "providerId"> <span className="tag-pod">판매자</span> {providerId} </div>
                                    <div className = "registrationDate"><span className="tag-pod">등록일</span> {registrationDate}</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className = "purchase">
                            {console.log("token??",this.props.token)}
                            {this.props.token == "" ? "": <Link to ={`${this.props.match.url}/purchase`}><div className="purchase-button">구매</div>
                            </Link>} 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchItemInfo;