import React, { lazy, Suspense, useReducer, useState } from 'react'

import styled from "styled-components"

const RiverInformation = lazy(() => import(/* webpackChunkName: "RiverInformation" */ '../RiverInformation/RiverInformation'))

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
  const [show, toggle] = useReducer( showing => !showing, true)
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

      <Suspense fallback={<div>Loading component ...</div>}>
        { show &&
          <RiverInformation name={river}/>
        }
      </Suspense>
    </AppWrapper>
  )
}

export default App;
