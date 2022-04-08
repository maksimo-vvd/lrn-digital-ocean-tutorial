import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components"
import {addMovie, incrementMovie, decrementMovie} from "../../store/movies/movies";

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
const Title2 = styled.h2`
  text-align:center;
  font-size: 1.75rem;
  color: #ECC488;
`
const ListTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 0;
`
const List = styled.ul`
  list-style: none;
  padding-left: 0;
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
const ListViewBox = styled.mark`
  color: #ECC488;
  text-align:center;
  font-size: 0.825rem;
  background-color: purple;
  border-radius: 50%;
  width: 40px;
  line-height: 40px;
  display: inline-block;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`
const AddForm = styled.form`
  input[type="text"] {
    margin: 10px; 
    width: calc(100% - 20px);
    padding: 5px 8px;
  }
  button[type="submit"] {
    width: 200px;
    display: block;
    margin: 0 auto;
  }
`

function App() {
  const [movieName, setMovie] = useState('')
  // const movies = useSelector(state => state.movies)
  const movies = [...useSelector(state => state.movies)].sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(addMovie(movieName))
    setMovie('')
  }

  return (
    <AppWrapper>
      <dl>
        <p>
          <dt>Step 1</dt>
          <dd>For install the new dependencies</dd>
          <dd><mark><kbd>&#10074; npm i</kbd></mark></dd>
        </p>
        <p hidden>
          <dt>Step 2</dt>
          <dd>First terminal</dd>
          <dd><mark><kbd>&#10074; npm start</kbd></mark></dd>
        </p>
      </dl>

      <Title>Manage State in React with Redux</Title>
      <Title2>Movies List</Title2>

      <AddForm onSubmit={ handleSubmit }>
        <fieldset>
          <legend>Add movie Form</legend>
          <label>
            <p>Add movie</p>
            <input
              type="text"
              value={movieName}
              onChange={event => setMovie(event.target.value)}
            />
          </label>
          <div>
            <Button type="submit">Add</Button>
          </div>
        </fieldset>
      </AddForm>

      <List>
        {movies.map(movie => (
          <Listitem key={movie.name}>
            <ListTitle>{movie.name}</ListTitle>

            Views: <ListViewBox>{movie.views}</ListViewBox>

            <button onClick={() => dispatch(decrementMovie(movie.name))}>
              <span role="img" aria-label="add">-</span>
            </button>

            <button onClick={() => dispatch(incrementMovie(movie.name))}>
              <span role="img" aria-label="add">+</span>
            </button>
          </Listitem>
        ))}
      </List>
    </AppWrapper>
  )
}

export default App;
