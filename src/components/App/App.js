import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import styled from "styled-components"

import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Preferences from "../Preferences/Preferences";

import useToken from './useToken'

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
const List = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
`
const Listitem = styled.li`
  background-color: #B667F1;
  padding: 1rem;
  cursor: pointer;
  
  &:nth-child(2n) {
    background-color: #9C51E0;
  }
  
  :hover {
    background-color: transparent;
    box-shadow: inset 0 0 0 5px #ECC488; 
    color: #fff;
    
    mark {
        color: #fff;
    }
  }
`

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken))
// }
// function getToken() {
//   const tokenString = sessionStorage.getItem('token')
//   const userToken = JSON.parse(tokenString)
//   console.log('getToken', userToken?.token)
//   return userToken?.token
// }

function App() {
  // const [token, setToken] = useState()
  // const token = getToken()

  const {token, setToken} = useToken(true)

  if ( !token ) {
    return <Login setToken={setToken} />
  }

  function Logout() {
    sessionStorage.clear()
    setToken(token)
  }

  return (
    <AppWrapper>
      <dl>
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

      <Title>Add Login Authentication to React Applications</Title>

      <BrowserRouter>
        <nav>
          <List>
            <Listitem><Link to="/dashboard">Dashboard</Link></Listitem>
            <Listitem><Link to="/preferences">Preferences</Link></Listitem>
            <Listitem><button onClick={Logout}>Log Out</button></Listitem>
          </List>
        </nav>

        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  )
}

export default App;
