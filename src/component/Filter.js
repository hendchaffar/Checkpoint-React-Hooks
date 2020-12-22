import React,{useState} from 'react';
import Rating from './Rating'

const Filter = ({ setTitleFilter, setRateFilter,RateFilter}) => {
    return (
        <div>
            <div>
        <input type="text" placeholder="Search for a movie..." 
        onChange={(e) => setTitleFilter(e.target.value)}/> 
        <div>
        <Rating RateFilter={RateFilter} setRateFilter={setRateFilter}   />
        </div>
            </div>
           
        </div>
    )
}

export default Filter