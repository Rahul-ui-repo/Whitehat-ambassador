import React,{useState} from 'react'
import './Store.scss';
import Books from "../../src/Images/Books.png";
import Amazon from "../../src/Images/Amazon.jpg";

import Earphones from "../../src/Images/Earphones.png";

import water from "../../src/Images/water.png";

import tshirt from "../../src/Images/Tshirt.png";

import Laptop from "../../src/Images/Laptop.png";



function Store(props) {
var storeOptions=[
    {
      "item": "Book",
      "img": Books,
      "points": "1000"
    },
    {
      "item": "Water Bottle",
      "img": water,
      "points": "2000"}
      ,{
      "item": "earphones",
      "img": Earphones,
      "points": "3000"
    },{
      "item": "amazon gift card",
      "img": Amazon,
      "points": "2000"
    },{
      "item": "laptop stickers",
      "img": Laptop,
      "points": "500", 
    },
    {
        "item": "tshirt",
        "img": tshirt,
        "points": "5000", 
      }];
    return (
        <>
        <h1 className="text-center ">Whitehat Store</h1>
        <h4 className="text-center mt-5 ">You have {props.rewardPoint} 💰 to shop</h4>
        <div className="storeContainer">
     {   storeOptions.map((store) =>
             <div className="card">
      <img src={store.img} alt="Denim Jeans"  height="200" width="200" />
       <h1>{store.item}</h1>
     <p className="price">{store.points}</p>
     <p><button onClick={()=>{props.rewardPointsHandler(store.points)}}>Add to Cart</button></p>
     </div>)}
     </div>
</>
    )
}

export default Store
