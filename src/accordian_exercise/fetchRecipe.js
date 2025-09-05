
import React from "react";

const fetchRecipe = async () => {
    
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        
         if (data.recipes && data.recipes.length > 0) 
            {
                console.log("✅ Recipes found:", data.recipes.length);
            } else {
                console.log("❌ No recipes found");
            }

        return data;  

    }

export {fetchRecipe};