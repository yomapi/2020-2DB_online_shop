import React, {Component} from 'react';
import './PuserInfo.css';
import axios from 'axios'
import {Link} from 'react-router-dom';

class PuserInfo extends Component{
    constructor(props){
        super(props)
        this.state={
            token: this.props.token,
            userId : this.props.userId,
            userName:'',
            registerDate:'',
        }
    }

    componentDidMount(){
        this.setState({
            token: this.props.token,
            userId : this.props.userId,
            userName : '',
            registerDate:'',
            updateDate: ''
        })
        this.getInfo();
    }

    getInfo = async() =>{
        const res = await axios.get(`/user/${this.state.userId}`, 
        {
            headers: {
                Authorization: this.state.token
        }});
        this.setState({
            userName : res.data.name,
            registerDate : res.data.createdAt,
            updateDate : res.data.updatedAt
        });
    }

    render(){
        const{id,userId,userName,registerDate,updateDate} = this.state;
        
        return(
            <div className="info-wrapper">
                <div className="info-box">
                    <div className="order-Right">
                        <div className = "user-info-box">
                            
                            <div className = "order-info-header">판매자 정보</div>
                            <div className = 'user-info-discription'>
                                <div className="order-pod">
                                    <span className="tag-pod">아이디</span>
                                {userId}
                                </div>
                                    <div className="order-pod">
                                    <span className="tag-pod">이 &nbsp; 름</span>
                                {userName}
                                </div>
                                <div className="order-pod">
                                    <span className="tag-pod">가입일</span>
                                    {registerDate}
                                </div>
                                <div className="order-pod">
                                    <span className="tag-pod">수정일</span>
                                    {updateDate}
                                </div>
                            </div>
                            <Link to = '/provider/user/update'>
                            <div className="purchase-button">
                                정보변경
                            </div></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PuserInfo;