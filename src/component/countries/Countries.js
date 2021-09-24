import React, { useEffect, useState } from 'react';
import Country from './country/Country';
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])
  return (
    <div >
      <h1>hello from countries: {countries.length}</h1>

      <div className='countries-container'>
      {
        countries.map(country => <Country
          key={country.cca2}
          country={country}
        ></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;

/* // name={country.name.common}
//           capital={country.capital}
//           flags={country.flags[0]} */