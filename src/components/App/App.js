import React, {useReducer, useState} from 'react'

import styled from "styled-components"

import RiverInformation from "../RiverInformation/RiverInformation";

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
const Title = styled.h1`
  text-align:center;
  font-size: 2rem;
  color: #ECC488;
`

function App() {
  const [river, setRiver] = useState('nile')
  const [show, toggle] = useReducer( state => !state, true)
  return (
    <AppWrapper>
      <Title>World's Longest Rivers</Title>

      <div>
        <Button onClick={ toggle }>Toggle Details</Button>
      </div>

      <Button onClick={() => setRiver('nile')}>Nile</Button>
      <Button onClick={() => setRiver('amazon')}>Amazon</Button>
      <Button onClick={() => setRiver('yangtze')}>Yangtze</Button>
      <Button onClick={() => setRiver('mississippi')}>Mississippi</Button>

      { show &&
        <RiverInformation name={river}/>
      }
    </AppWrapper>
  )
}

export default App;
