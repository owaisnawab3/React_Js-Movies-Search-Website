import React from 'react'
import { useEffect } from 'react'
import Search_icon from '../src/assets/Search/search.svg'
import Bg_image from '../src/assets/images/Movie-removebg-preview.png'
import './App.css'
import { useState } from 'react'
import MovieCard from './MovieCard'
//decb9580

const API_URL = 'http://www.omdbapi.com/?apikey=decb9580'

const movie = {
  "Title": "Batman Begins",
  "Year": "2005",
  "imdbID": "tt0372784",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


function App() {

const [movies, setMovies] = useState([])
const [searchTerm , setSearchTerm] = useState("")

const searchMovie = async (title) => {
 const response = await fetch(`${API_URL}&s=${title}`)
 const data = await response.json();

 setMovies(data.Search)
}

useEffect(() => {
    searchMovie("Batman")
},[])

  return (
    <>
     <div className="app">
    <h1>Movies land here</h1>
    <div className='search'>
    <input type="search" placeholder='Search for Movies' 
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}/>
    <img src={Search_icon} alt="search" onClick={() => searchMovie(searchTerm)}/>
     </div>
    
    
     {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />

            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}


     <div className='bg-image'>
    <img src={Bg_image} alt="" />
     </div>
     </div>
    </>
  )
}

export default App
