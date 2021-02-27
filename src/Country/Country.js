import React from 'react';

const Country = (props) => {
    const country=props.country;
    return (
        <div className="countryDetails">
            <h1>this is {country.name}</h1>
            <h2>{country.capital}</h2>
            <h2>{country.subregion}</h2>
            <h2>{country.population}</h2>
            <p>{country.currencies[0].name}</p>
            <p>{country.timezones}</p>
            <img  src={country.flag}></img>
            <button onClick={()=>props.handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;