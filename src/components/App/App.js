import React, { useReducer, useState } from 'react'

// import './App.css'
import styled from "styled-components"

// import FileNamer from "../FileNamer/FileNamer";

const AppWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 5px 20px;
`
const FormFieldset = styled.fieldset`
  margin: 20px 0; 
`
const Title = styled.h1`
  text-align:center;
  font-size: 2rem;
  color: #ECC488;
`

const formReducer = ( state, event ) => {
  const isCheckbox = event.target.type === 'checkbox'
  console.log('form Reducer: ', isCheckbox)
  return {
    ...state,
    [event.target.name]: isCheckbox ? event.target.checked : event.target.value,
    // [event.name]: event.value,
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {})
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitting(true)

    setTimeout(() => setSubmitting(false), 3000)
  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox'
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    })
  }

  return (
    <AppWrapper>
      <Title>How About Them Apples</Title>
      { submitting &&
        <div>
          You are Submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => {
              console.log(45454, name, value)
              return <li key={ name }> <b>{ name }</b>: { value.toString() } </li>
            } )}
          </ul>
        </div>
      }

      <form onSubmit={ handleSubmit }>
        <FormFieldset>
          <label>
            <p>Name</p>
            <input
              name="name"
              // onChange={ handleChange }
              onChange={ setFormData }
              autoComplete="off"
            />
          </label>
        </FormFieldset>

        <FormFieldset>
          <label>
            <p>Apples</p>
            <select
              name="apple"
              // onChange={ handleChange }
              onChange={ setFormData }
            >
              <option value="">--Please choose an option--</option>
              <option value="fuji">Fuji</option>
              <option value="jonathan">Jonathan</option>
              <option value="honey-crisp">Honey Crisp</option>
            </select>
          </label>

          <label>
            <p>Count</p>
            <input
              type="number"
              name="count"
              // onChange={ handleChange }
              onChange={ setFormData }
              step="1"
            />
          </label>

          <label>
            <p>Gift Wrap</p>
            <input
              type="checkbox"
              name="gift-wrap"
              // onChange={ handleChange }
              onChange={ setFormData }
            />
          </label>
        </FormFieldset>

        <button type="submit">Submit</button>
      </form>
    </AppWrapper>
  )
}

export default App;
