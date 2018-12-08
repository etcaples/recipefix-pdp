import React from 'react';

const ToolsList = () => {
  const tools = ['large bowl', 'food processor', 'small bowl', 'rubber spatula', 'knife', 'measuring cups', 'measuring spoons'];

  return (
    <div>
      <h4>Tools</h4>
      <ul>
        {
          tools.map(tool => <li>{tool}</li>)
        }
      </ul>
    </div>
  )
};

export default ToolsList;