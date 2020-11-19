import "./App.css";
import { useEffect, useState } from "react";
import { Personaje } from "./components/Personaje";

const App = () => {
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/people/")
      const data = await response.json();
      setPersonajes(data.results)
    }
    fetchData()
  }, [])

  console.log(personajes)

  return (
    <div className="App">
      <div>
        <ol>
          {personajes.map((personaje) => (
            <ul key={personaje.name}>
              <Personaje name={personaje.name}
                mass={personaje.mass}
                hairColor={personaje.hair_color}
                eyeColor={personaje.eye_color}
              />
            </ul>
          ))}
        </ol>
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
  5) en el estado podemos crear nuevos personajes, actualizarlos, eliminarlos
  6) repositorio en GitHub y lo mandas a mi correo
*/
