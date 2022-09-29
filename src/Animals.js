import React, {useEffect, useState} from 'react'

function Animals(){
  const [animals, setAnimals] = useState([])
 
  useEffect(() => {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
    .then(res => res.json())
    .then(data => setAnimals(data))
  },[])

  const animalList = animals.map((animal) => (
    <div className='column' key={animal.id}>
      <img src={animal.image_link}/>
      <h4>{animal.name}</h4>
      <p>{animal.geo_range}</p>
    </div>
  ))

  return (
    <div className='row'>
      {animalList}
    </div>
  )
}

export default Animals