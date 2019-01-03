import React, { Component } from 'react';
import './App.css';
import RecipeOfTheDay from './components/RecipeOfTheDay'
import Recipes from './components/Recipes'


class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
          <div className='recipeOfTheDay'><RecipeOfTheDay /></div>
          <div className='recipes'><Recipes /></div>
      </div>
        );
      }
    }
    
    export default App;
