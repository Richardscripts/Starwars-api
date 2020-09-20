import React from 'react';
import loopThroughResults from '../HelperFunctions/loopThroughResults';

export default class DisplaySpecies extends React.Component {
  render() {
    let speciesResults = this.props.species.map((specie, idx) => {
      const array = loopThroughResults(specie, this.props.dataForArrays).map(
        (results, idx) => {
          return <li key={idx}>{results}</li>;
        }
      );
      return (
        <ul key={idx} className='results-content'>
          <li>
            <h2>{specie.name}</h2>
          </li>
          {array}
        </ul>
      );
    });
    return <>{speciesResults}</>;
  }
}
