import React, {Component} from 'react';
import './Plogin.css';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios'

class Plogin extends Component{
    constructor(props){
        super(props);
        this.state={
            userId:'ID',
            password: 'PASSWORD',
            Token : '',
            isSeller : false,
            Logged : false
        }
    }

    handleChange=(e)=>{
        this.setState({userId : e.target.value})
    }

    handleChange_pass = (e) =>{
        this.setState({password : e.target.value})
    }


    onLogin=async()=>{
        await this.getToken();
        await this.getInfo();
        if (this.state.Token != "" && this.state.isSeller==true){
            this.props.LoginHandler(this.state.Token, this.state.userId);
            this.setState({Logged:true});
        }
    }

    getToken = async() =>{
        const res = await axios.put('/signIn', {
            id: this.state.userId,
            password: this.state.password
          })
        this.setState({Token:res.data.Token})
    }

    getInfo = async() =>{
        const res = await axios.get(`/user/${this.state.userId}`, 
        {
            headers: {
                Authorization: this.state.Token
        }});
        this.setState({isSeller : res.data.isSeller})
    }
    
    onKeyPress=(e)=>{
        if(e.key === 'Enter'){
            this.onLogin();
        }
    }

    renderRedirect = () => {
        if(this.state.Logged){
            return <Redirect to='/provider' />
        }
    }

    render(){
        const{id,userId,userName,registerDate} = this.state;
        
        return(
            <div className="info-wrapper">
                {this.renderRedirect()}
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
                                    <Link to = {this.state.Logged ? '/provider' : '/provider/login'}>
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