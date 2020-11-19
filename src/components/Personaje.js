import React from 'react'

export const Personaje = ({ 
  name, 
  mass, 
  hairColor, 
  eyeColor, 
  deletePersonaje,
  editPersonaje,
}) => {

  const handleDeletePersonaje = (name) => {
    deletePersonaje(name)
  }

  const handleEditPersonaje = (name, mass, hairColor, eyeColor) => {
    editPersonaje(name, mass, hairColor, eyeColor)
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{mass}</li>
        <li className="list-group-item">{hairColor}</li>
        <li className="list-group-item">{eyeColor}</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-light" onClick={() => handleEditPersonaje(name, mass, hairColor, eyeColor)}>Editar</button>
        <button className="btn btn-light" onClick={() => handleDeletePersonaje(name)}>Borrar</button>
      </div>
    </div>
  )
}
