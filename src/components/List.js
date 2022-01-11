import React, { useState } from 'react'
import locations from '../data/locations'
import Card from './Card'

const List = () => {
  const [places, setPlaces] = useState(locations)
  const removeCard = (id) => {
    const newPlaces = places.filter((place) => place.id != id)
    setPlaces(newPlaces)
  }
  return (
    <section>
      <h2 className='title'>Our Tours</h2>
      <div className='underline'></div>
      {places.map((place) => {
        return <Card key={place.id} place={place} removeCard={removeCard} />
      })}
    </section>
  )
}

export default List
