import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const {area,region,population,name,flags} = props.country;
    return (
        <div className='country bg-success'>
            <img src={flags.png} alt="" />
            <h2>Country Name:{name.common}</h2>
            <p>Area = {area}</p>
            <p>Region = {region}</p>
            <p>population = {population}</p>
        </div>
    );
};

export default Country;