import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import styled from "styled-components"

import Manatee from "../Manatee/Manatee";
import Narwhal from "../Narwhal/Narwhal";
import Whale from "../Whale/Whale";

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
const Title2 = styled.h2`
  text-align:center;
  font-size: 1.75rem;
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

function App() {
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
      </dl>

      <Title>Handle Routing in React Apps with React Router</Title>
      <Title2>Marine Mammals</Title2>

      <BrowserRouter>
        <nav>
          <List>
            <Listitem><Link to="/manatee">Manatee</Link></Listitem>
            <Listitem><Link to="/narwhal">Narwhal</Link></Listitem>
            <Listitem><Link to="/whale">Whale</Link></Listitem>
            {/*<Listitem><Link to="/whale?type=beluga">Beluga Whale</Link></Listitem>*/}
            {/*<Listitem><Link to="/whale?type=blue">Blue Whale</Link></Listitem>*/}
            <Listitem><Link to="/whale/beluga">Beluga Whale</Link></Listitem>
            <Listitem><Link to="/whale/blue">Blue Whale</Link></Listitem>
          </List>
        </nav>

        <Switch>
          <Route path="/manatee">
            <Manatee />
          </Route>

          <Route path="/narwhal">
            <Narwhal />
          </Route>

          {/* Search library */}
          {/*<Route path="/whale">*/}
          {/*  <Whale />*/}
          {/*</Route>*/}

          {/* Dynamic component. Hook useParams (exact & :type) */}

          <Route exact path="/whale">
            <Whale />
          </Route>

          <Route path="/whale/:type">
            <Whale />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  )
}

export default App;
