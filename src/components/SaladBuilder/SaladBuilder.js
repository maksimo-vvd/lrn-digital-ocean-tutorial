import React from 'react';
import SaladItem from '../SaladItem/SaladItem'

import { ReactComponent as AppleSVG } from '../../images/apple-svgrepo-com.svg';
import { ReactComponent as AvocadoSVG } from '../../images/avocado-svgrepo-com.svg';
import { ReactComponent as BroccoliSVG } from '../../images/broccoli-svgrepo-com.svg';
import { ReactComponent as CarrotSVG } from '../../images/carrot-svgrepo-com.svg';
import { ReactComponent as GlassSVG } from '../../images/glass-svgrepo-com.svg';
import { ReactComponent as RiseSVG } from '../../images/rice-svgrepo-com.svg';
import { ReactComponent as CheeseSVG } from '../../images/cheese-svgrepo-com.svg';
import { ReactComponent as MushroomSVG } from '../../images/mushroom-svgrepo-com.svg';
import { ReactComponent as KiwiSVG } from '../../images/kiwi-svgrepo-com.svg';
import { ReactComponent as PineappleSVG } from '../../images/pineapple-svgrepo-com.svg';
import { ReactComponent as TomatoSVG } from '../../images/tomato-svgrepo-com.svg';

import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: [10, 50],
    justifyContent: "center"
  },
})

const ingredients = [
  {
    image: <AppleSVG />,
    name: 'apple',
  },
  {
    image: <AvocadoSVG />,
    name: 'avocado',
  },
  {
    image: <BroccoliSVG />,
    name: 'broccoli',
  },
  {
    image: <CarrotSVG />,
    name: 'carrot',
  },
  {
    image: <GlassSVG />,
    name: 'red wine dressing',
  },
  {
    image: <RiseSVG />,
    name: 'seasoned rice',
  },
  // {
  //   image: <CheeseSVG />,
  //   name: 'cheese',
  // },
  // {
  //   image: <MushroomSVG />,
  //   name: 'mushroom',
  // },
  // {
  //   image: <KiwiSVG />,
  //   name: 'kiwi',
  // },
  // {
  //   image: <PineappleSVG />,
  //   name: 'pineapple',
  // },
  // {
  //   image: <TomatoSVG />,
  //   name: 'tomato',
  // },
]

function SaladBuilder () {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      {
        ingredients.map(ingredient => {
          console.log('SaladBuilder > ', ingredient)
          return <SaladItem image={ ingredient.image } name={ ingredient.name } key={ ingredient.name } />
        })
      }
    </div>
  )
}

export default SaladBuilder
