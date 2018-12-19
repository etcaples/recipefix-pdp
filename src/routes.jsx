import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import RecipePage from './components/recipePage/RecipePage';
import exampleData from '../exampleData';

// TODO:
// path here && in server static should be {family title -> App, showing variation list} and {family genus -> Recipe page showing chosen/default version}

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/shortcrust-pastry/" render={() => <App recipeData={exampleData}/>}/>
      <Route exact path="/shortcrust-pastry/sweet" render={() => <RecipePage />} />
    </Switch>
  </BrowserRouter>
);

export default routes;