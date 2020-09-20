import React from 'react';
import DisplayPeople from '../DisplayPeople/DisplayPeople';
import DisplayPlanets from '../DisplayPlanets/DisplayPlanets';
import DisplaySpecies from '../DisplaySpecies/DisplaySpecies';
import DisplayVehicles from '../DisplayVehicles/DisplayVehicles';
import DisplayFilms from '../DisplayFilms/DisplayFilms';
import DisplayStarships from '../DisplayStarships/DisplayStarships';

export default function DisplayResults(props) {
  return (
    <>
      {props.state.selected === 'people' && (
        <DisplayPeople
          people={props.state.dataSearch}
          dataForArrays={props.state.dataForArrays}
        />
      )}
      {props.state.selected === 'planets' && (
        <DisplayPlanets
          planets={props.state.dataSearch}
          dataForArrays={props.state.dataForArrays}
        />
      )}
      {props.state.selected === 'species' && (
        <DisplaySpecies
          species={props.state.dataSearch}
          dataForArrays={props.state.dataForArrays}
        />
      )}
      {props.state.selected === 'vehicles' && (
        <DisplayVehicles
          vehicles={props.state.dataSearch}
          dataForArrays={props.state.dataForArrays}
        />
      )}
      {props.state.selected === 'films' && (
        <DisplayFilms
          films={props.state.dataSearch}
          dataForArrays={props.state.dataForArrays}
        />
      )}
      {props.state.selected === 'starships' && (
        <DisplayStarships
          starships={props.state.dataSearch}
          dataForArrays={props.state.dataForArrays}
        />
      )}
    </>
  );
}
