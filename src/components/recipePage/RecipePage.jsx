import React from 'react';
import RecipeBody from './RecipeBody';

const RecipePage = () => {

    return (
      <div>
        <h1>Recipe Name</h1>
        <p>this is a brief description of what this recipe is</p>
        <picture>
          <img src="https://images-gmi-pmc.edge-generalmills.com/173da066-c6b4-45dd-9b28-0d459cf6f169.jpg" alt="Apple Pie"/>
        </picture>
        <RecipeBody />
      </div>
    )
}

export default RecipePage;
