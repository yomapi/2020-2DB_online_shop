import React, {Component} from 'react';
import './UserInfo.css';
import {Link} from 'react-router-dom';

class UserInfo extends Component{
    state={
        id:1,
        userId:'',
        userName:'',
        registerDate:'',
    }

    componentDidMount(){

        this.setState({
            id: 1,
            userId : 'kdysy1130@naver.com',
            userName : '김대연',
            registerDate:'2020-01-01'
        })
    }

    render(){
        const{id,userId,userName,registerDate} = this.state;
        
        return(
            <div className="info-wrapper">
                <div className="info-box">
                    <div className="order-Right">
                        <div className = "user-info-box">
                            
                            <div className = "order-info-header">유저정보</div>
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
                            </div>
                            <Link to = '/user/update'>
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

export default UserInfo;