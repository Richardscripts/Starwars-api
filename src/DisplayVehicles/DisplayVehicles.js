import React from 'react';
import loopThroughResults from '../HelperFunctions/loopThroughResults';

export default class DisplayVehicles extends React.Component {
  render() {
    let vehiclesResults = this.props.vehicles.map((vehicle, idx) => {
      const array = loopThroughResults(vehicle, this.props.dataForArrays).map(
        (results, idx) => {
          return <li key={idx}>{results}</li>;
        }
      );
      return (
        <ul key={idx} className='results-content'>
          <li key={idx}>
            <h2>{vehicle.name}</h2>
          </li>
          {array}
        </ul>
      );
    });
    return <>{vehiclesResults}</>;
  }
}
