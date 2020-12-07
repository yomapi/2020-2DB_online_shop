import React, {Component} from 'react';
import './PuserInfoUpdate.css';
import {Link} from 'react-router-dom';
import axios from 'axios'

class PuserInfoUpdate extends Component{
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
            this.putInfo();
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
                                <span className="tag-pod">회원이름</span>
                                    <input value={this.state.address} onChange={this.handleChange} onKeyPress={this.onKeyPress}/>
                            </div>
                            <div className="order-pod">
                                <span className="tag-pod">비밀번호</span>
                                <input value={this.state.password} onChange={this.handleChange_pass} onKeyPress={this.onKeyPress}/>
                            </div>
                            <Link to = '/provider/user'>
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

export default PuserInfoUpdate;