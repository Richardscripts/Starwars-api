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
      {props.state.selectInput === 'people' && (
        <DisplayPeople people={props.state.data} />
      )}
      {props.state.selectInput === 'planets' && (
        <DisplayPlanets planets={props.state.data} />
      )}
      {props.state.selectInput === 'species' && (
        <DisplaySpecies species={props.state.data} />
      )}
      {props.state.selectInput === 'vehicles' && (
        <DisplayVehicles vehicles={props.state.data} />
      )}
      {props.state.selectInput === 'films' && (
        <DisplayFilms films={props.state.data} />
      )}
      {props.state.selectInput === 'starships' && (
        <DisplayStarships starships={props.state.data} />
      )}
    </>
  );
}
