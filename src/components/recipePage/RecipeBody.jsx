import React from 'react';
import ToolsList from './ToolsList';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';

const RecipeBody = () => (
  <div>
    <ToolsList />
    <IngredientsList />
    <InstructionsList />
  </div>
);

export default RecipeBody;