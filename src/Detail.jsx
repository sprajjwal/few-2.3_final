import React from 'react';
import './Detail.css';

function Detail(props) {
  const { items } = props;
  return(
    <div>
      {items.map((item, i) => {
        return (
          <div className="container" key={i}>
            <h3>{item.name}</h3>
            <p>Height: {item.height}</p>
            <p>Hair: {item.hair_color}</p>
            <p>Skin: {item.skin_color}</p>
            <p>Eye Color: {item.eye_color}</p>
            <p>Birth Year: {item.birth_year}</p>
            <p>Gender: {item.gender}</p>
            <p>Homeworld: {item.homeworld.name}</p>
            <p>Climate: {item.homeworld.climate}</p>
            <p>Diameter: {item.homeworld.diameter}</p>
            <p>gravity: {item.homeworld.gravity}</p>
            <p>Orbital Period: {item.homeworld.orbital_period}</p>
            <p>Population: {item.homeworld.population}</p>
            <p>Rotation Period: {item.homeworld.rotation_period}</p>
            <p>Surface Water: {item.homeworld.surface_water}</p>
            <p>Terrain: {item.homeworld.terrain}</p>
          </div>)
      })}
    </div>
  )
}

export default Detail