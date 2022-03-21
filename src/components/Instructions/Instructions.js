// Class component
// import React, { Component } from 'react';
// import './Instructions.css'
// import emoji from './emoji.svg'

// export default class Instructions extends Component {
//
//   render() {
//     return(
//       <div className="instructions">
//         <img alt="laughing crying emoji" src={emoji} />
//         <p>Click on an emoji to view the emoji short name.</p>
//       </div>
//     )
//   }
// }

// Functional component
import React from 'react';
import './Instructions.css';
import emoji from './emoji.svg'

export default function Instructions() {
  console.log('Functional component: Instructions')

  return(
    <div className="instructions">
      <img alt="laughing crying emoji" src={emoji} />
      <p>Click on an emoji to view the emoji short name.</p>
    </div>
  )
}
