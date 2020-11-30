import React, {Component} from 'react';
import './UserInfoUpdate.css';
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom';

class UserInfoUpdate extends Component{
    constructor(props){
        super(props);
        this.state={
            token: this.props.token,
            userId : this.props.userId,
            userName:'',
            registerDate:'',
            password: ''
        };
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
            token: this.props.token,
            userId : this.props.userId,
            userName : '',
            registerDate:''
        })
        this.getInfo();
    }

    getInfo = async() =>{
        const res = await axios.get(`/user/${this.state.userId}`, 
        {
            headers: {
                Authorization: this.state.token
        }});
        this.setState({userName : res.data.name});
    }

    putInfo = async() =>{
        console.log(this.state.token)
        const res = await axios.put(`/user/${this.state.userId}`, 
        {
            password : this.state.password,
            name : this.state.userName
        },
        {
            headers: {
                Authorization: this.state.token
            }
        });
        this.setState({userName : res.data.name});
        console.log(res)
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
                                <span className="tag-pod">수정이름</span>
                                    <input value={this.state.userName} onChange={this.handleChange} onKeyPress={this.onKeyPress}/>
                            </div>
                            <div className="order-pod">
                                <span className="tag-pod">수정비번</span>
                                <input value={this.state.password} onChange={this.handleChange_pass} onKeyPress={this.onKeyPress}/>
                            </div>
                            <Link to = '/user'>
                            <div className="update-button" onClick={this.putInfo}>
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

export default UserInfoUpdate;