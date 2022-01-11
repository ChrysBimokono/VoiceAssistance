import { useState, useEffect } from "react";

import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css'



function App() {
const[cart, setCart]= useState([])
const[menuItems, setMenuItems]= useState([])

useEffect(() => {
  alanBtn({
    key: '6bb0346fb69332ad84b1329aa6ee5bc92e956eca572e1d8b807a3e2338fdd0dc/stage',
    onCommand: (commandData) => {
      if(commandData.command === 'getMenu'){
        setMenuItems(commandData.data)
      }   else if(commandData.command === 'addToCart'){
        addToCart(commandData.data)
      } 
    },
  })
}, [])

const addToCart=(menuItem)=>{
   setCart((oldCart)=>{
       return [...oldCart, menuItem]
   })
}

  return (
    <div className="App">
      <h1 className="menu">Menu Item</h1>
    {menuItems.map((menuItem) =>{
    return  <li key={menuItem.name}> 
    {menuItem.name}- ${menuItem.price} - {menuItem.category}

    <button className="button" onClick={()=>addToCart(menuItem)}>add to cart</button>
    </li>
    })} 

    <h2>Cart</h2>
    {cart.map((cartItem)=>{
    return <li key={cartItem.name}> 
            {cartItem.name}- ${cartItem.price} - {cartItem.category}
          </li>
    })}
    </div>
  );
}

export default App
