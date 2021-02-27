import React from 'react';
import Country from '../../Country/Country';

const Carts = (props) => {
    const cart=props.cart;
    // let totalPopulation=0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation=totalPopulation+ country.population;
        
    // }
    const totalPopulation=cart.reduce((sum,Country)=>sum+Country.population,0)
    return (
        <div>
            <h1>total cart :{cart.length}</h1>
            <p>population : {totalPopulation}</p>
        </div>
    );
};

export default Carts;