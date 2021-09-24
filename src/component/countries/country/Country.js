import React from 'react';
import './Country.css';

const Country = (props) => {
  const { name, capital, flags, region } = props.country;
  // console.log(props.country)
  return (
    <div className='design'>
      <img src={flags[0]} alt="flag" />
      <h2>name: {name.common}</h2>
      <h3>capital: {capital}</h3>
      <h3>region: {region}</h3>
      

    </div>
  );
};

export default Country;
