import { combineReducers } from "redux";

const ADD_MOVIE = 'ADD_MOVIE'
const INCREMENT_MOVIE = 'INCREMENT_MOVIE'
const DECREMENT_MOVIE = 'DECREMENT_MOVIE'

export function addMovie(movieName) {
  return {
    type: 'ADD_MOVIE',
    movieName,
  }
}

export function incrementMovie(movieName) {
  return {
    type: 'INCREMENT_MOVIE',
    movieName,
  }
}

export function decrementMovie(movieName) {
  return {
    type: 'DECREMENT_MOVIE',
    movieName,
  }
}

const defaultMovies = [
  {
    name: 'Avatar',
    views: 100,
  },
]

function movies(state = defaultMovies, action) {
  const movie = state.find(m => action.movieName === m.name)
  const movies = state.filter(m => action.movieName !== m.name)

  switch (action.type) {
    case ADD_MOVIE:
      return [
        ...state,
        {
          name: action.movieName,
          views: 1,
        }
      ]
    case INCREMENT_MOVIE:
      return [
        ...movies,
        {
          ...movie,
          views: movie.views + 1
        }
      ]
    case DECREMENT_MOVIE:
      return [
        ...movies,
        {
          ...movie,
          views: movie.views - 1
        }
      ]
    default:
      return state
  }
}

const movieApp = combineReducers({
  movies
})

export default movieApp
