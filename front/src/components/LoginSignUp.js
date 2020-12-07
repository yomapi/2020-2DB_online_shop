import React, {Component} from 'react';
import './LoginSignUp.css';
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom';

class LoginSignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            userId:'',
            name: '',
            password: '',
            status: 0
        }
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


    renderRedirect = () => {
        if(this.state.status == 201){
            return <Redirect to='/login' />
        }
    }

    postSignUp = async() =>{
        const res = await axios.post('/signUp', {
            id: this.state.userId,
            password: this.state.password,
            name : this.state.name,
            isSeller : false
          })
        this.setState({status : res.status})
        console.log("sta",res)
    }
    
    onKeyPress=(e)=>{
        if(e.key === 'Enter'){
            this.postSignUp();
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
                            <div className="update-button" onClick={this.postSignUp}>
                                가입완료
                            </div>
                            </div>
                            {this.renderRedirect()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginSignUp;