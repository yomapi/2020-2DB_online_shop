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
            providerId:'미구현',
            name: res.data.data[0].name,
            discription:`
            <미구현입니다>
            애국가(愛國歌)는 대한민국의 국가이다. 1919년 안창호에 의해 대한민국 임시 정부에서 스코틀랜드 민요인 〈올드 랭 사인〉에 삽입해서 부르기 시작하다가 1935년 한국의 작곡가 안익태가 지은 《한국환상곡》에 가사를 삽입해서 현재까지 부르고 있다.

            가사의 작사자는 윤치호 설, 안창호 설, 윤치호와 최병헌 합작설 등이 있다. 윤치호의 작사설 때문에 대한민국 임시 정부에서는 애국가를 바꾸려 하였으나 대한민국 임시 정부 주석 김구의 변호로 계속 애국가로 채택하게 되었다.[1] 이후 1948년의 정부 수립 이후 국가로 사용되어 왔으며, 2010년 국민의례 규정에서 국민의례시 애국가를 부르거나 연주하도록 함으로써 국가로서의 역할을 간접적으로 규정하고 있다.[2][3]
            `,
            tag: res.data.data[0].tag,
            price:res.data.data[0].price,
            registrationDate:'2020-11-09[미구현]',
            photo: 'https://i.pinimg.com/736x/eb/12/46/eb12465440ea39c8cd38bc31d73a1385.jpg',
            orderdate : "2020-11-11[미구현]",
            cancel : (res.data.data[0].productAlive!=="1" || res.data.data[0].orederAlive !=="1" ? true : false),
            completed : (res.data.data[0].status === 1 ? true : false),
            address : res.data.data[0].address,
        })
        console.log(res.data.data[0])
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