import React from 'react'
import './recipes.css';
import { useState } from 'react';
const DropDown = (props) => {

  const [toggle, setToggle] = useState(false);
  
  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className = "recipeDiv">
        <div className="header">
          <div className = 'recipeName'>{props.recipe.name}</div>
          <button onClick={handleToggle}>v</button>
        </div>
        {toggle && <p>Ingredients : {props.recipe.ingredients.map((ing, j) => <li key = {j}>{ing}</li>)}</p>}
    </div>
  )
}

export default DropDown;