import React, {Component} from 'react';
import './PuserInfoUpdate.css';
import {Link} from 'react-router-dom';

class PuserInfoUpdate extends Component{
    state={
        id:1,
        userId:'kdysy1130',
        userName:'김대연',
        registerDate:'2020-01-23',
        password: ''
    }

    handleChange=(e)=>{
        this.setState({userName : e.target.value})
    }

    handleChange_pass = (e) =>{
        this.setState({password : e.target.value})
    }


    onUpdate=()=>{

    }
    
    onKeyPress=(e)=>{
        if(e.key === 'Enter'){
            this.onUpdate();
        }
    }


    componentDidMount(){
        this.setState({
            id:1,
            userId:'kdysy1130',
            userName:'김대연',
            registerDate:'2020-01-23'
        })
    }

    render(){
        const{id,userId,userName,registerDate} = this.state;
        
        return(
            <div className="info-wrapper">
                <div className="info-box">
                    <div className="order-Right">
                        <div className = "user-info-box">
                        <div className = "order-info-header">정보변경</div>
                        <div className = "user-info-discription">
                            <div className="order-pod">
                                <span className="tag-pod">회원이름</span>
                                    <input value={this.state.address} onChange={this.handleChange} onKeyPress={this.onKeyPress}/>
                            </div>
                            <div className="order-pod">
                                <span className="tag-pod">비밀번호</span>
                                <input value={this.state.password} onChange={this.handleChange_pass} onKeyPress={this.onKeyPress}/>
                            </div>
                            <Link to = '/provider/user'>
                            <div className="update-button" onClick={this.onUpdate}>
                                변경
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

export default PuserInfoUpdate;