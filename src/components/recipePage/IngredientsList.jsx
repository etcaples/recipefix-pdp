import React from 'react';

const IngredientsList = () => {
  const ingredients = ['all purpose flour', 'cold butter', 'salt', 'sugar', 'ice cold water'];

  return (
    <div>
      <h4>Ingredients</h4>
      <ol>
        {
          ingredients.map(ingredient => <li>{ingredient}</li>)
        }
      </ol>
    </div>
  )
};

export default IngredientsList;