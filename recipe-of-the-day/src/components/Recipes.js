import React, { Component } from 'react'
import recipes from '../data/recipes'
import Recipe from './Recipe';

class recipeOfTheDay extends Component {
    renderRecipes() {
        const recipeElements = recipes.map((recipe, index) => {
            return (
                <Recipe recipes={recipe} key={index} />
            )
        })
        return recipeElements
    }


    render() {
        return (
            <div >
                <div className='header'>
                    <h1 className='tital'>Recipes </h1>
                </div>
                <div className="content">
                    {this.renderRecipes()}
                </div>
            </div>


        )
    }
}

export default recipeOfTheDay;