import React from 'react'

export const Personaje = ({ name, mass, hairColor, eyeColor }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p><strong>Peso:</strong> {mass}</p>
      <p><strong>Color de pelo:</strong> {hairColor}</p>
      <p><strong>Color de ojos:</strong> {eyeColor}</p>
    </div>
  )
}
