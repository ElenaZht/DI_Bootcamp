import RecipeItem from "./RecipeItem";
import { v4 as uuidv4 } from 'uuid';

export default class RecipeCollection{
    public recipes: RecipeItem[] = []

    add(title: string, ingredients: string[], instructions: string[]){
        this.recipes.push({
            id: uuidv4(),
            title: title,
            ingredients: ingredients,
            instructions: instructions,
            isFavorite: false,
            isShown: false
        })
    }

    remove(idToRemove: string | null){
        if (idToRemove === null) return
        this.recipes = this.recipes.filter(r => r.id !== idToRemove)
    }

    toggle(idToToggle: string | null){
        if (idToToggle === null) return
        const recipeIdx = this.recipes.findIndex(r => r.id === idToToggle)
        if (recipeIdx !== -1){
            this.recipes[recipeIdx].isFavorite = !this.recipes[recipeIdx].isFavorite
        } else {
            console.log('recipe not found')
        }
    }

    saveToLocalStorage(){
        localStorage.setItem('recipes', JSON.stringify(this.recipes))
    }

    loadFromLocalStorage(){
        const recipesFromLocalStorage = localStorage.getItem('recipes')
        if (recipesFromLocalStorage){
            this.recipes = JSON.parse(recipesFromLocalStorage) as RecipeItem[]

        } else {
            this.recipes = []
        }
    }

    clearCollection(){
        this.recipes = []
        this.saveToLocalStorage()
    }

    switchIsShown(idToSwitchIsShown: string | null){
        if (idToSwitchIsShown === null) return

        this.recipes.forEach(r => {
            r.isShown = (r.id === idToSwitchIsShown) ? !r.isShown : r.isShown
        })
    }

}