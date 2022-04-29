import PropTypes from 'prop-types'

const Recipe = ({id, name, servings, cookTime, instructions}) => {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>
    </div>
  )
}

Recipe.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  servings: PropTypes.number,
  cookTime: PropTypes.string,
  instructions: PropTypes.string,
}

export default Recipe
