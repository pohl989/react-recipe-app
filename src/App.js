import RecipeList from './components/RecipeList'

import './App.css'
import {starterRecipes} from './data'

function App() {
  return (
    <RecipeList recipes={starterRecipes} />
  )
}

export default App
