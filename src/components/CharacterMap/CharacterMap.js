import React, { memo } from 'react'
import PropTypes from 'prop-types'
// import {text} from "express";

function itemize(text) {
	const letters = text.split('')
		.filter(letter => letter !== ' ')
		.reduce((collection, item) => {
			const letter = item.toLowerCase()
			return {
				...collection,
				[letter]: (collection[letter] || 0) + 1
			}
		}, {})
	// return letters
	return Object.entries(letters).sort((a,b) => b[1] - a[1])
}

function CharacterMap({ text }) {
	return (
		<div>
			Character map:
			{ itemize(text).map(character => (
				<div key={character[0]}>
					{character[0]} : {character[1]}
				</div>
			)) }
		</div>
	)
}

CharacterMap.propTypes = {
	text: PropTypes.string.isRequired,
}

export default memo(CharacterMap)
