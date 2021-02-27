import { createRef, useEffect, useState } from 'react';
import './App.css';
import Carts from './components/Cart.js/Carts';
import Country from './Country/Country';

function App() {
  const [countries,setCountries]= useState([]);
  const [cart,setCart]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>{setCountries(data)})
    .catch(error=>console.log(error))
  },[])
  const handleAddCountry=(country)=>{
    setCart([...cart,country]);
  }
  return (
    <div className="App">
      <h1>country : {countries.length}</h1>
      <h1>Country Add: {cart.length}</h1>
      <Carts cart={cart}></Carts>
      <div className="countryContainer">
          {
            countries.map(country=><Country handleAddCountry={handleAddCountry} country={country}></Country>
            )
          }
          
      </div>
    </div>
  );
}

export default App;
