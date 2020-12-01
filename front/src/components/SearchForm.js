import {React,Component} from 'react';
import './SearchForm.css';
import axios from 'axios'

class SearchForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : "",
            searchby : this.props.searchby,
            items : []
        }
    }

    handleChange=(e)=>{
        this.setState({value : e.target.value})
    }

    onKeyPress=(e)=>{
        if(e.key === 'Enter'){
            this.onSearch();
        }
    }

    onSearch=()=>{
        this.onSearchProduct();
    }

    onSearchProduct=async()=>{
        await this.setState({items:[]})
        const res = await axios.get(`/products/${this.state.searchby}/${this.state.value}`);
        console.log(res.data);
        res.data.data.map(
            ({id, name, price, tag}) =>(
                this.setState({items : this.state.items.concat({id:id , name:name, price:price, tag:tag, photo : "https://lh3.google.com/u/0/ogw/ADGmqu_PrO7E2qRHeCSXQAQlPhmM5m_bNrvGYrlDMW4d=s32-c-mo"})})
            )
        );
        this.props.onSearch(this.state.items);
    }

    change=(event)=>{
        this.setState({searchby: event.target.value});
    }

    render(){
        return(
            <div className="form">
                <select className="Searchby" onChange={this.change} value={this.state.searchby}>
                  <option value="name">이름</option>
                  <option value="tag">태그</option>
                  <option value="provider">판매자</option>
               </select>
                <input value={this.state.value} onChange={this.handleChange} onKeyPress={this.onKeyPress}/>
                <div className="search-button" onClick={this.onSearch}>
                    검색
                </div>
            </div>
        )
    }
}
export default SearchForm;