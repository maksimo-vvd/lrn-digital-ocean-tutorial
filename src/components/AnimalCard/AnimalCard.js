import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import AnimalDetails from '../AnimalDetails/AnimalDetails';

// export default function AnimalCard({ diet, name, size, scientificName }) {
export default function AnimalCard({ name, size, ...props }) {
  return(
    // <Card title="Animal" details={<em>Mammal</em>}>
    <Card
      title="Animal"
      details={
      <AnimalDetails
        {...props} />
    }>
      <h3>1 {name}</h3>

      <div>2 {size}kg</div>
      <p>as slot for children</p>
      <AnimalDetails
        {...props}
      />
    </Card>
  )
}

AnimalCard.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}
