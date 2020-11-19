import "./App.css";
import { useEffect, useState } from "react";
import { Personaje } from "./components/Personaje";
import { AddPersonajeForm } from "./components/AddPersonajeForm";
import { EditPersonajeForm } from "./components/EditPersonajeForm";

const App = () => {
  const initialFormState = {
    name: '',
    mass: '',
    hair_color: '',
    eye_color: ''
  }

  const [personajes, setPersonajes] = useState([])
  const [editing, setEditing] = useState(false)
  const [currentPersonaje, setCurrentPersonaje] = useState(initialFormState)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/people/")
      const data = await response.json();
      setPersonajes(data.results)
    }
    fetchData()
  }, [])

  const addPersonaje = (nuevoPersonaje) => {
    setPersonajes([...personajes, nuevoPersonaje]);
  }

  const deletePersonaje = (nombrePersonaje) => {
    setPersonajes(personajes.filter(personaje => personaje.name !== nombrePersonaje))
  }

  const editPersonaje = (name, mass, hairColor, eyeColor) => {
    setEditing(true)
    console.log(name, mass, hairColor, eyeColor)
    setCurrentPersonaje({
      name: name,
      mass: mass,
      hair_color: hairColor,
      eye_color: eyeColor
    })
  }

  const updatePersonaje = (name, updatedPersonaje) => {
    setEditing(false)
    console.log("name", name)
    console.log("updatePersonaje", updatedPersonaje)
    setPersonajes(personajes.map((personaje) => (personaje.name === name ? updatedPersonaje : personaje)))
  }

  return (
    <div className="Container">

      <h1>CRUD de Star Wars</h1>
      <div className="row">
        <div className="col-sm" style={divStyle}>
          {editing ? (
            <div>
              <h2>Editar personaje</h2>
              <EditPersonajeForm
                setEditing={setEditing}
                currentPersonaje={currentPersonaje}
                updatePersonaje={updatePersonaje}
              />
            </div>
          ) : (
              <div>
                <h2>Agregar personaje</h2>
                <AddPersonajeForm addPersonaje={addPersonaje} />
              </div>
            )}
        </div>
        <div className="col-sm">
          <h2>Ver personajes</h2>
          <div className="row">
            {personajes.map((personaje) => (
              <div className="col-sm mb-2">
                <Personaje
                  key={personaje.name}
                  name={personaje.name}
                  mass={personaje.mass}
                  hairColor={personaje.hair_color}
                  eyeColor={personaje.eye_color}
                  deletePersonaje={deletePersonaje}
                  editPersonaje={editPersonaje}
                />
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;

/*
x 1) pasar a hooks
x 2) usar async await
x 3) crear un componente reusable para cada personaje
x 4) de cada personaje vas a mostrar el nombre, peso, color de cabello y el color de los ojos
x 5) en el estado podemos crear nuevos personajes, actualizarlos, eliminarlos
x 6) repositorio en GitHub y lo mandas a mi correo
*/
