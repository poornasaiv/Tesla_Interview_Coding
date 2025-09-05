import { useState } from 'react';
import React, { useEffect } from 'react'
import DropDown from './DropDown'
import { fetchRecipe } from './fetchRecipe';

const Home = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=> {
        fetchRecipe()
        .then((data) => {
            setRecipes(data.recipes);
        })
    }, []) 

  return (
    <div>
        {recipes.map((recipe, i) => {
          return <DropDown key = {i} recipe = {recipe}/>
        })}
        
    </div>
  )
}

export default Home