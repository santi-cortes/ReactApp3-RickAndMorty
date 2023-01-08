import React, { useState } from 'react'
import useAllLocations from '../../hooks/useAllLocations'
import Loader from '../Loader/Loader'
import './InputSearch.css'

const InputSearch = ({ handlerClick }) => {   


  
  const [inputValue, setInputValue] = useState('')

  const {allLocations, isLoading} = useAllLocations(inputValue) 



  const allNames = allLocations?.map(locationSrc => (
    <button  
    onClick ={handlerClick} 
    key={locationSrc.url}
    value={locationSrc.id}
    >
    {locationSrc.name}
    </button>
  )
  )

  return (
    <form className='container-location'>
        <input 
        type="text" 
        placeholder='Ingresa un lugar' 
        className='input-location'
        onChange={(e) => setInputValue(e.target.value)}/>
        
        {
          isLoading ?
          <Loader/> :
          <div className='list-all-names'>
           { allLocations && inputValue?.length > 0 ? allNames : null } 
          </div>
        }
    </form>
  )
}

export default InputSearch