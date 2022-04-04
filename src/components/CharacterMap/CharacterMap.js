import React, {memo, useContext} from "react"
import PropTypes from "prop-types"
import { TextContext } from "../App/App"

function itemize(text){
  const letters = text.split('')
    .filter(l => l !== ' ')
    .reduce((collection, item) => {
      const letter = item.toLowerCase();
      return {
        ...collection,
        [letter]: (collection[letter] || 0) + 1
      }
    }, {})

  return Object.entries(letters)
    .sort((a, b) => b[1] - a[1]);
}

function CharacterMap({ show }) {
  const text = useContext(TextContext)

  if ( !show ) return null

  return (
    <div>
      {/*Character Map: { text.length }*/}
      Character Map:
      {itemize(text).map(character => (
        <div key={character[0]}>
          {character[0]}: {character[1]}
        </div>
      ))}
    </div>
  )
}

CharacterMap.propTypes = {
  show: PropTypes.bool.isRequired
}

export default memo(CharacterMap)
