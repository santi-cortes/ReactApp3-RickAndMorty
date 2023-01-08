import './App.css'
import useLocation from './hooks/useLocation'
import LocationCard from './components/LocationCard'
import CharacterCard from './components/CharacterCard/CharacterCard'
import InputSearch from './components/InputSearch/InputSearch'
import { useState } from 'react'


function RickAndMortyApp() {

  
  const [searchedValue, setSearchedValue] = useState()
 
  const {location} = useLocation(searchedValue)




  const people = location?.residents.map(resident => (
        <CharacterCard 
        resident={resident}
        key = {resident}
        />
    ))


    const handlerClick = (e) =>{
      e.preventDefault()
      setSearchedValue(e.target.value)
    }



  return (
    <div className="App">
      <header className='header'>
        <p>!Hola, estas en mi aplicacion web de Rick and Morty, <br />puedes ingresar una locacion y veras una recopilacion <br /> de personajes de esta genial serie!</p>
        <InputSearch  
        handlerClick ={handlerClick}
        />
      </header>
      
      <LocationCard location={location}/>

      <main className='list'>
        {
          people
        }
      </main>

      <footer className='footer'>
        <h3>Made by Santiago with ❤️</h3>
      </footer>

    </div>
  )
  
}

export default RickAndMortyApp
