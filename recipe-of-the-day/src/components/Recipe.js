import React from 'react';

const Recipe = (props) => {
    const Recipes = props.recipes;
    return (
        <div >
            <ul className="recipe" >
                <li>Name : {Recipes.name}</li>
                <li>Servings : {Recipes.servings}</li>
                <li>Category : {Recipes.category}</li>
            </ul>
        </div>
    )
}

export default Recipe;