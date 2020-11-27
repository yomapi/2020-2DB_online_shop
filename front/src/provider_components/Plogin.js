import React, {Component} from 'react';
import './Plogin.css';
import {Link} from 'react-router-dom';

class Plogin extends Component{
    state={
        userId:'ID',
        password: 'PASSWORD'
    }

    handleChange=(e)=>{
        this.setState({userId : e.target.value})
    }

    handleChange_pass = (e) =>{
        this.setState({password : e.target.value})
    }


    onLogin=()=>{

    }
    
    onKeyPress=(e)=>{
        if(e.key === 'Enter'){
            this.onLogin();
        }
    }

    render(){
        const{id,userId,userName,registerDate} = this.state;
        
        return(
            <div className="info-wrapper">
                <div className="info-box">
                    <div className="order-Right">
                        <div className = "user-info-box">
                            <div className = "order-info-header">판매자 로그인</div>
                            <div className = "user-info-discription">
                                <div className="login-pod">
                                    <span className="tag-pod">아 이 디</span>
                                        <input value={this.state.userId} onChange={this.handleChange} onKeyPress={this.onKeyPress}/>
                                </div>
                                <div className="login-pod">
                                    <span className="tag-pod">비밀번호</span>
                                    <input value={this.state.password} onChange={this.handleChange_pass} onKeyPress={this.onKeyPress}/>
                                </div>
                                <div className="button-pod">
                                    <Link to = '/provider'>
                                        <div className="update-button" onClick={this.onLogin}>
                                            로그인
                                        </div>
                                    </Link>
                                    <Link to = '/provider/login/signup'>
                                        <div className="update-button">
                                            회원가입
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Plogin;