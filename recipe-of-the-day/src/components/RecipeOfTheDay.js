import React, { Component } from 'react'
import recipeOfTheDays from '../data/recipeOfTheDay'
import Ingredient from './Ingredient';

class recipeOfTheDay extends Component {
    renderIngredients() {
        const ingredientElements = recipeOfTheDays.ingredients.map((recipeOfTheDay, index) => {
            return (
                <Ingredient ingredient={recipeOfTheDay} key={index} />
            )
        })
        return ingredientElements
    }


    render() {
        return (
            <div >
                <div className='header'>
                    <h1 className='tital'> Recipe Of The Day </h1>
                    <h2>{recipeOfTheDays.name}</h2>
                </div>
                <div className="content">
                    <div className='description'>
                        <h4 className='subtit'>Description:</h4>
                        <h3 className='cont'>{recipeOfTheDays.description}</h3>
                    </div>
                    <div>
                        <h4 className='subtit'>Ingredients:</h4>
                        {this.renderIngredients()}
                    </div>
                </div>
            </div>

        )
    }
}

export default recipeOfTheDay;