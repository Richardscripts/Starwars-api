import React from 'react';
import loopThroughResults from '../HelperFunctions/loopThroughResults';

export default class DisplayStarships extends React.Component {
  render() {
    let starshipsResults = this.props.starships.map((starship, idx) => {
      const array = loopThroughResults(starship).map((results, idx) => {
        return <li key={idx}>{results}</li>;
      });
      return (
        <ul key={idx} className='results-content'>
          <li>
            <h2>{starship.name}</h2>
          </li>
          {array}
        </ul>
      );
    });
    return <>{starshipsResults}</>;
  }
}
