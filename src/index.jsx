import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// set up router to ingest the right files
import App from './App';
import exampleData from '../exampleData';

ReactDOM.render(
  <BrowserRouter>
    <App recipeData={exampleData} />
  </BrowserRouter>,
  document.getElementById('app'));
