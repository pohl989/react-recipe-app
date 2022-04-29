import Recipe from './Recipe'
import PropTypes from 'prop-types'

function RecipeList({recipes}) {
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <Recipe
            key={recipe.id}
            {...recipe}
          />
        )
      })}
    </div>
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.array,
}

export default RecipeList
