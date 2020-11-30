import React from 'react';
import './SearchForm.css';

const SearchForm = ({value,onChange,onCreate, onKeyPress})=>{
    return(
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="search-button" onClick={onCreate}>
                검색
            </div>
        </div>
    )
}
export default SearchForm;