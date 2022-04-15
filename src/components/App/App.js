import React, {useEffect, useRef, useReducer, useState} from 'react'

import styled from "styled-components"

import { getList, setItem } from "../../services/list"

const AppWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 5px 20px;
`
const Button = styled.button`
  margin: 10px; 
  min-width: 100px;
  padding: 5px 8px;
`
const TextInput = styled.input`
  margin: 10px; 
  min-width: 100px;
  padding: 5px 8px;
`
const Title = styled.h1`
  text-align:center;
  font-size: 2rem;
  color: #ECC488;
`

function App() {
  const [alert, setAlert] = useState(false)
  const [animalInput, setAnimalInput] = useState('')
  const [list, setList] = useState([])
  // let mounted = true
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    if (list.length && !alert) {
      return
    }
    getList()
      .then(items => {
        if (mounted || mounted.current ) {
          setList(items)
        }
      })
    // return () => mounted = false
    return () => mounted.current = false
  }, [alert, list])

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        if (mounted || mounted.current) {
          setAlert(false)
        }
      }, 1000)
    }
  }, [alert])

  const handleSubmit = e => {
    e.preventDefault()
    setItem(animalInput).then(() => {
      if (mounted || mounted.current) {
        setAnimalInput('')
        setAlert(true)
      }
    })
  }

  return (
    <AppWrapper>
      <dl>
        <p>
          <dt>Step 1</dt>
          <dd>For install the new dependencies</dd>
          <dd><mark><kbd>&#10074; npm i </kbd></mark></dd>
        </p>
        <p>
          <dt>Step 2</dt>
          <dd>First terminal</dd>
          <dd><mark><kbd>&#10074; npm start</kbd></mark></dd>
        </p>
        <p>
          <dt>Step 3</dt>
          <dd>Second terminal</dd>
          <dd><mark><kbd>&#10074; npm api</kbd></mark></dd>
        </p>
      </dl>

      <Title>World's Animals</Title>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <h2>Add the New animal</h2>
            {!alert && <p><mark>{ animalInput }</mark></p>}
            {alert && <p><mark>Submit Successfully</mark></p>}
            <TextInput
              type="text"
              value={animalInput}
              onInput={event => setAnimalInput(event.target.value)}
            />
          </label>

          <Button type="submit">Toggle Details</Button>
        </fieldset>
      </form>

      <ul>
        {list.map(item => <li key={`{item.item}-${item.id}`}>{item.item}</li>)}
      </ul>
    </AppWrapper>
  )
}

export default App;
