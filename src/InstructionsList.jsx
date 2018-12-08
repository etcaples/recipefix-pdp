import React from 'react';

const InstructionsList = () => {
  const instructions = ['put salt and 1.5 cups of flour in food processor - pulse 5 times', 'cut all cold butter into cubes', 'scatter cubed butter into food processor on top of flour mixture', 'run food processor for about 15 seconds (mixture should look like tiny crumbs and all the butter should be coated in flour)', 'scrape sides of work bowl', 'add remaining flour and pulse 5 more times', 'empty flour mixture into a large bowl', 'add 5 tablespoons of cold water and mix dough together with hands or rubber spatula', 'etc...'];

  return (
    <div>
      <h4>Instructions</h4>
      <ol>
        {
          instructions.map(instruction => <li>{instruction}</li>)
        }
      </ol>
    </div>
  )
};

export default InstructionsList;