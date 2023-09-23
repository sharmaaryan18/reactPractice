
import React from "react";

import Products from './components/Products';
import NewProduct from "./components/NewProduct";


const App = () => {

  const products = [
    {
      id :'p1',
      title:'Nirma',
      amount:100,
      date: new Date(2021, 8, 10),
    },
    {
      id :'p2',
      title:'Surf Excel',
      amount:200,
      date: new Date(2023, 5, 1),
    },
    {
      id :'p1',
      title:'Tide',
      amount:130,
      date: new Date(2021, 8, 5),
    },
    {
      id :'p4',
      title:'Maggi',
      amount:300,
      date: new Date(2021, 8, 2),
    },
  ];

  function printProductData(data) {
    console.log("im inside App.js");
    console.log(data);
  }

  return (
    <div> 
      <NewProduct pranay ={printProductData}/>
      <Products items ={products}/>
    </div>
  
  );
}

export default App;
