import React from 'react';
import PropTypes from 'prop-types';
import './AnimalDetails.css';

function convertFood(food) {
	switch(food) {
		case 'insects':
			return 'insects';
		case 'meat':
			return 'meat';
		case 'plants':
			return 'plants'
		default:
			return 'all';
	}
}

export default function AnimalDetails({ diet, scientificName }) {
	return(
		<div className="details">
			<h4>Details:</h4>

			<p>
				<b>Scientific Name:</b> { scientificName }
			</p>

			<dl>
				<dt>Diet:</dt>
				{diet.map(food => <dd key={food}><u>{ convertFood(food) }</u></dd>)}
				{/*<dt>Diet:</dt> {diet.map(food => convertFood(food)).join(', ')}*/}
			</dl>
		</div>
	)
}

AnimalDetails.propTypes = {
	diet: PropTypes.arrayOf(PropTypes.string).isRequired,
	scientificName: PropTypes.string.isRequired,
}
