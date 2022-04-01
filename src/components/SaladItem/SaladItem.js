import React, {useContext, useReducer} from "react";
import PropTypes from "prop-types"
import { createUseStyles } from "react-jss"

// Working with SaladMaker & User context
import UserContext from "../User/User";
import { SaladContext } from "../SaladMaker/SaladMaker";

const useStyles = createUseStyles({
  add: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  favorite: {
    fontSize: 20,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  image: {
    fontSize: 80
  },
  wrapper: {
    border: 'lightgrey solid 1px',
    margin: 10,
    padding: 25,
    position: 'relative',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: 200,
  }
})

const reducer = key => ++key

function SaladItem ({image, name}) {
  const classes = useStyles()

  const user = useContext(UserContext)
  const { setSalad } = useContext(SaladContext)
  const favorite = user.favorites.includes(name)

  const [id, updateId] = useReducer(reducer, 0)

  function update() {
    updateId()
    // Create item object for insert in SaladMaker state
    setSalad({
      name,
      id: `${name}-${id}`,
    })
  }

  return (
    <div className={classes.wrapper}>
      <h3>{ name }</h3>

      <span
        className={classes.favorite}
        aria-label={favorite ? 'Favorite' : 'Not Favorite'}>
        {favorite ? '😋' : ''}
      </span>

      <button className={classes.add} onClick={update}>
        <span className={classes.image} role="img" aria-label={ name }>{ image }</span>
      </button>
    </div>
  )
}

SaladItem.propTypes = {
  // image: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
}

export default SaladItem
