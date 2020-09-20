import React from 'react';
import loopThroughResults from '../HelperFunctions/loopThroughResults';

export default class DisplayPlanets extends React.Component {
  render() {
    let planetResults = this.props.planets.map((planet, idx) => {
      const array = loopThroughResults(planet, this.props.dataForArrays).map(
        (results, idx) => {
          return <li key={idx}>{results}</li>;
        }
      );
      return (
        <ul key={idx} className='results-content'>
          <li>
            <h2>{planet.name}</h2>
          </li>
          {array}
        </ul>
      );
    });
    return <>{planetResults}</>;
  }
}
