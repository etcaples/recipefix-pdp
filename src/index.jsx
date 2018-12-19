import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import exampleData from '../exampleData';

// TODO:
// path here && in server static should be family title

ReactDOM.render(
  <BrowserRouter>
      <App recipeData={exampleData}/>
  </BrowserRouter>,
  document.getElementById('app')
);
