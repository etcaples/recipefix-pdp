import React from 'react';

// this is the main page. It:
// displays the family/title of the recipe (i.e. shortcrust pastries)
// displays a list of the genus/variations (i.e. sweet pastry, savory pastry, all-butter pastry, pastry for humidity)

// if I click on 'sweet', it need to display either the most recent sweet version or the starred sweet version


// for reference: specie = version
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeData: this.props.recipeData[0],// just gets the first family
    }
  }
  
  render() {
    const {recipeData} = this.state;
    return (
      <div>
        <h1>{recipeData.family}</h1>
        <h4>A brief description of the thing, maybe 250 characters or so</h4>
        <ul>
          {
            recipeData.variations.map(variation => 
              <li>{variation.genus}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default App;
