import React, { useState } from 'react'

export const AddPersonajeForm = (props) => {
  const initialFormState = {
    name: '',
    mass: '',
    hair_color: '',
    eye_color: ''
  }
  const [personaje, setPersojane] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setPersojane({ ...personaje, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!personaje.name) return

    props.addPersonaje(personaje)
    setPersojane(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre</label>
        <input 
          className="form-control" 
          type="text" name="name" 
          value={personaje.name} 
          onChange={handleInputChange} 
        />
      </div>
      <div className="form-group">
        <label>Peso</label>
        <input 
          className="form-control" 
          type="text" 
          name="mass" value={personaje.mass} 
          onChange={handleInputChange} 
        />
      </div>
      <div className="form-group">
        <label>Color de pelo</label>
        <input 
          className="form-control" 
          type="text" 
          name="hair_color" 
          value={personaje.hair_color} 
          onChange={handleInputChange} 
        />
      </div>
      <div className="form-group">
        <label>Color de ojos</label>
        <input 
          className="form-control" 
          type="text" 
          name="eye_color" 
          value={personaje.eye_color} 
          onChange={handleInputChange} 
        />
      </div>
      <button className="btn btn-primary">Agregar personaje</button>
    </form>
  )
}
