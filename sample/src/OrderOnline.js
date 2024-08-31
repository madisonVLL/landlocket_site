import './App.css';
import React, { useState } from 'react';

function genId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

const passiontmenu = [
    {id: genId(), item: "Jerk Chicken Wrap w/ Chips", description: "Lettuce, tomatoes, red onions, cheese, jerk ranch", price: "11.00", image: "./images/jerk_wrap.jpeg"},
    {id: genId(), item: "Crab Fried Rice", description: "Contains Mushrooms", price: "21.00", image: "./images/no_background.png"},
    {id: genId(), item: "Salmon Bites", description: "Crispy, southern fried salmon bites with a side of remoulade sauce", price: "13.00", image: "./images/salmon_bites.jpeg"},
    {id: genId(), item: "Chicken Hibachi Burrito", description: "Hibachi fried rice and veggies, meat choice, yum yum sauce packed into a burrito", price: "15.00", image: "./images/chicken_hibachi_burrito.jpeg"}
]

const MenuItem = ({ item, addToCart }) => {
    return (
      <div className="menu-item">
        <img src={item.image} alt={item.name} className="menu-item-image" />
        <div className="menu-item-details">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span className="menu-item-price">${item.price}</span>
          <button onClick={() => addToCart(item)} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      </div>
    );
};

const Menu = ({ addToCart }) => {
    const [menuItems] = useState(passiontmenu);
  
    return (
      <div className="menu">
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    );
  };

export default Menu


