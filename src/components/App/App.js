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
  // const isCheckbox = event.target.type === 'checkbox'

  if (event.reset) {
    return {
      apple: '',
      count: 0,
      name: '',
      'gift-wrap': false,
    }
  }

  return {
    ...state,
    // [event.target.name]: isCheckbox ? event.target.checked : event.target.value,
    [event.name]: event.value,
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {
    count: 100,
    apple: 'jonathan',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)
      setFormData({
        reset: true
      })
    }, 3000)
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
              onChange={ handleChange }
              // onChange={ setFormData }
              autoComplete="off"
              value={ formData.name || '' }
            />
          </label>
        </FormFieldset>

        <FormFieldset>
          <label>
            <p>Apples</p>
            <select
              name="apple"
              onChange={ handleChange }
              // onChange={ setFormData }
              value={ formData.apple || '' }
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
              onChange={ handleChange }
              // onChange={ setFormData }
              step="10"
              value={ formData.count || '' }
            />
          </label>

          <label>
            <p>Gift Wrap</p>
            <input
              type="checkbox"
              name="gift-wrap"
              onChange={ handleChange }
              // onChange={ setFormData }
              checked={ formData['gift-wrap'] || false}
            />
          </label>
        </FormFieldset>

        <button type="submit">Submit</button>
      </form>
    </AppWrapper>
  )
}

export default App;
