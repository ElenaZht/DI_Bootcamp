import '../src/style.css'
import RecipeCollection from './models/RecipeCollection'
import RecipeItem from './models/RecipeItem'
import RecipeTemplate from './templates/RecipeTemplate'

const updateUI = (collection: RecipeCollection) => {
  const recipeContainer = document.getElementById('recipeContainer')
  if (recipeContainer){
    recipeContainer.innerHTML = ''
    if (collection.recipes.length > 0){
      collection.recipes.forEach((recipe: RecipeItem) => {
      const template = new RecipeTemplate(recipe)
      template.display()
      })
    } else {
      recipeContainer.textContent = 'no recipes yet.'
    }

  }
}

const handleAddRecipe = (event: SubmitEvent, myCollection: RecipeCollection) => {
  event.preventDefault()
  const titleInputValue = (document.getElementById('recipeTitle') as HTMLInputElement).value.trim()
  const ingredientsValue = (document.getElementById('ingredients') as HTMLTextAreaElement).value.trim().split('\n')
  const instructionsValue = (document.getElementById('instructions') as HTMLTextAreaElement).value.trim().split('\n')
  console.log(instructionsValue)
  if (!titleInputValue) {
    alert('title is missing')
    return
  }
  if (!ingredientsValue || ingredientsValue.length < 1){
    alert('ingredients are missing')
    return
  }
  if(!instructionsValue || instructionsValue.length < 1){
    alert('instructions are missing')
    return
  }

  myCollection.add(titleInputValue, ingredientsValue, instructionsValue)
  myCollection.saveToLocalStorage();
  (document.getElementById('recipeEntryForm') as HTMLFormElement).reset();
  updateUI(myCollection)
  
}

const clearTheCollection = (collection: RecipeCollection) => {
  collection.clearCollection()
  collection.saveToLocalStorage()
  updateUI(collection)
}

const makeFavorite = (id: string | null, collection: RecipeCollection) => {
  collection.toggle(id)
  collection.saveToLocalStorage()
  updateUI(collection)
}

const removeRecipe = (id: string | null, collection: RecipeCollection) => {
  collection.remove(id)
  collection.saveToLocalStorage()
  updateUI(collection)
}

const showOrHide = (id: string | null, collection: RecipeCollection) => {
  collection.switchIsShown(id)
  collection.saveToLocalStorage()
  updateUI(collection)
}

function main(){
  /** initial settings */
  let myCollection = new RecipeCollection()
  myCollection.loadFromLocalStorage()

  /**render recipes list */
  updateUI(myCollection)

  /** event handlers */
  // form submit
  const form = document.getElementById('recipeEntryForm') as HTMLFormElement;
  if (form) {
    form.addEventListener('submit', (event) => handleAddRecipe(event, myCollection));
  }

  // clear recipes button
  const clearRecipesButton = document.getElementById('clearRecipesButton') as HTMLButtonElement
  if (clearRecipesButton){
    clearRecipesButton.addEventListener('click', () => clearTheCollection(myCollection))
  }

  // make favorite recipe button
  const recipeContainer = document.getElementById('recipeContainer');
  if (recipeContainer){
    recipeContainer.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;

      // Check if the clicked element is a "make favorite" button
      if (target && target.classList.contains('makeFavoriteBtn') && target.getAttribute('data-id')) {
        makeFavorite(target.getAttribute('data-id'), myCollection);
      }
    });
  }

  // remove recipe button
  if (recipeContainer){
    recipeContainer.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target && target.classList.contains('removeBtn') && target.getAttribute('data-id')) {
        removeRecipe(target.getAttribute('data-id'), myCollection)
      }
    })
  }

  // show / hide recipe detailes
  if (recipeContainer){
        recipeContainer.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target && target.classList.contains('showDetailsBtn') && target.getAttribute('data-id')) {
          showOrHide(target.getAttribute('data-id'), myCollection)
        }
    })
  }


}
main()