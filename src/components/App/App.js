import React, { useState, useReducer } from 'react'

import styled from "styled-components"

import CharacterMap from "../CharacterMap/CharacterMap"

const AppWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 5px 20px;
`
const Title = styled.h1`
  text-align:center;
  font-size: 2rem;
  color: #ECC488;
`

function App() {
  const [text, setText] = useState('')
  const [showExplanation, toggleExplanation] = useReducer(state => !state, false)

  return (
    <AppWrapper>
      <dl hidden>
        <p>
          <dt>Step 1</dt>
          <dd>For install the new dependencies</dd>
          <dd><mark><kbd>&#10074; npm i</kbd></mark></dd>
        </p>
        <p>
          <dt>Step 2</dt>
          <dd>First terminal</dd>
          <dd><mark><kbd>&#10074; npm start</kbd></mark></dd>
        </p>
        <p>
          <dt>Step 3</dt>
          <dd>Second terminal</dd>
          <dd><mark><kbd>&#10074; node server.js</kbd></mark></dd>
        </p>
      </dl>

      <Title>Avoid Performance Pitfalls in React with memo, useMemo, and useCallback</Title>

      <label htmlFor="text">
        <p>Add Your Text Here:</p>
        <textarea
           id="text"
           name="text"
           rows="10"
           cols="80"
           onChange={e => setText(e.target.value)}
        >
        </textarea>
      </label>

      <div>
        <button onClick={toggleExplanation}>Show Explanation</button>
      </div>
      {showExplanation &&
         <p>This displays a list of the most common characters.</p>
      }

      <CharacterMap text={text}/>

    </AppWrapper>
  )
}

export default App;
