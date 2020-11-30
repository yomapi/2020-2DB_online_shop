import React, {Component} from 'react';
import './Penroll.css';
import {Link} from 'react-router-dom';

class Penroll extends Component{
    constructor(props){
        super(props);
        this.state={
            provider: '',
            name: '',
            tags: '',
            price: '',
            discription : '',
            file : '',
            previewURL : ''
        }
    }

    handleChange_name=(e)=>{
        this.setState({name : e.target.value})
    }

    handleChange_tags=(e)=>{
        this.setState({tages : e.target.value})
    }

    handleChange_price = (e) =>{
        this.setState({price : e.target.value})
    }

    handleChange_discription = (e) =>{
        this.setState({discription : e.target.value})
    }

    handleChange_file = (e) =>{
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () =>{
            this.setState({
                file : file,
                previewURL : reader.result
            })
        }
        reader.readAsDataURL(file);
    }


    onEnroll=()=>{

    }
    
    onKeyPress=(e)=>{
        if(e.key === 'Enter'){
            this.onEnroll();
        }
    }

    render(){
        
        return(
            <div className="info-wrapper">
                <div className="info-box">
                    <div className="order-Right">
                        <div className = "user-info-box">
                        <div className = "order-info-header">상품등록</div>
                        <div className = "user-info-discription">
                            <div className="elogin-pod">
                                <span className="tag-pod">상 품 명</span>
                                    <input value={this.state.name} onChange={this.handleChange_name} onKeyPress={this.onKeyPress}/>
                            </div>
                            <div className="elogin-pod">
                                <span className="tag-pod">가 &nbsp; &nbsp;격</span>
                                    <input value={this.state.price} onChange={this.handleChange_price} onKeyPress={this.onKeyPress}/>
                            </div>
                            <div className="edescription-pod">
                                <span className="dtag-pod">상세설명</span>
                                <textarea value={this.state.discription} onChange={this.handleChange_discription} onKeyPress={this.onKeyPress}/>
                            </div>
                            <div className="elogin-pod">
                                <span className="tag-pod">태 &nbsp; &nbsp;그</span>
                                <input value={this.state.tags} onChange={this.handleChange_tags} onKeyPress={this.onKeyPress}/>
                            </div>
                            <div className="ephoto-pod">
                                <span className="tag-pod">이 미 지</span>
                                <input type="file" accept='image/jpg,image/png,image/jpeg,image/gif' name = 'item_img' onChange={this.handleChange_file}/>
                            </div>
                            <div className="epreview"><img src={this.state.previewURL}></img></div>
                            <Link to = '/provider/enroll/list'>
                                <div className="update-button" onClick={this.onEnroll}>
                                    등록
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

export default Penroll;