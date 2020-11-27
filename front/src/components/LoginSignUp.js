import React, {Component} from 'react';
import './LoginSignUp.css';
import {Link} from 'react-router-dom';

class LoginSignUp extends Component{
    state={
        userId:'',
        name: '',
        password: ''
    }

    handleChange=(e)=>{
        this.setState({userId : e.target.value})
    }

    handleChange_name=(e)=>{
        this.setState({name : e.target.value})
    }

    handleChange_pass = (e) =>{
        this.setState({password : e.target.value})
    }


    onSignUp=()=>{

    }
    
    onKeyPress=(e)=>{
        if(e.key === 'Enter'){
            this.onSignUp();
        }
    }

    render(){
        const{id,userId,userName,registerDate} = this.state;
        
        return(
            <div className="info-wrapper">
                <div className="info-box">
                    <div className="order-Right">
                        <div className = "user-info-box">
                        <div className = "order-info-header">회원가입</div>
                        <div className = "user-info-discription">
                            <div className="login-pod">
                                <span className="tag-pod">아 이 디</span>
                                    <input value={this.state.userId} onChange={this.handleChange} onKeyPress={this.onKeyPress}/>
                            </div>
                            <div className="login-pod">
                                <span className="tag-pod">회원이름</span>
                                    <input value={this.state.name} onChange={this.handleChange_name} onKeyPress={this.onKeyPress}/>
                            </div>
                            <div className="login-pod">
                                <span className="tag-pod">비밀번호</span>
                                <input value={this.state.password} onChange={this.handleChange_pass} onKeyPress={this.onKeyPress}/>
                            </div>
                            <Link to = '/login'>
                                <div className="update-button" onClick={this.onSignUp}>
                                    가입완료
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginSignUp;