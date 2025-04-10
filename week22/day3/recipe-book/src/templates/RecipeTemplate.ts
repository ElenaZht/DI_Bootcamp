import RecipeItem from "../models/RecipeItem";

export default class RecipeTemplate{
    constructor(
        public recipe: RecipeItem
    ){}

    display(){
        const recipeDiv = document.createElement('div')
        recipeDiv.classList.add('recipe_card')
        recipeDiv.innerHTML = `
            <h3>${this.recipe.isFavorite ? '❤️' : ''}${this.recipe.title} <button class='showDetailsBtn' data-id="${this.recipe.id}">${this.recipe.isShown ? 'hide' : 'show'} details</button></h3>
            
            <div id='recipeDetails'>
                <ul style="display: ${this.recipe.isShown ? 'flex' : 'none'};">
                    ${this.recipe.ingredients.map(ing => {
                        return `<li key={ing.id}>${ing}</li>`
                    }).join('')}
                </ul>
                <ol style="display: ${this.recipe.isShown ? 'flex' : 'none'};">
                    ${this.recipe.instructions.map(ins => {
                        return `<li key={ins.id}>${ins}</li>`
                    }).join('')}
                </ol> 
            </div>

            <div className='buttons'>
                <button class='removeBtn' data-id="${this.recipe.id}">remove</button>
                <button class='makeFavoriteBtn' data-id="${this.recipe.id}">make ${this.recipe.isFavorite ? 'not' : ''} favorite</button>
            </div>
        `
        document.getElementById('recipeContainer')?.appendChild(recipeDiv)
    }
}
