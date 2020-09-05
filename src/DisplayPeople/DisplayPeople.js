import React from 'react';
import loopThroughResults from '../HelperFunctions/loopThroughResults';

export default class DisplayPlanets extends React.Component {
  render() {
    let peopleResults = this.props.people.map((person, idx) => {
      const array = loopThroughResults(person).map((results, idx) => {
        return <li key={idx}>{results}</li>;
      });
      return (
        <ul key={idx} className='results-content'>
          <li>
            <h2>{person.name}</h2>
          </li>
          {array}
        </ul>
      );
    });
    return <>{peopleResults}</>;
  }
}
