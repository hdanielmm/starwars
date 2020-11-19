import React, { useState } from 'react'

export const EditPersonajeForm = (props) => {
  
  const [personaje, setPersojane] = useState(props.currentPersonaje)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setPersojane({ ...personaje, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.updatePersonaje(personaje.name, personaje)
  }

  const handleClick = () => {
    props.setEditing(false)
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
      <button className="btn btn-light">Actualizar personaje</button>
      <button className="btn btn-primary" onClick={handleClick}>Cancelar</button>
    </form>
  )
}
