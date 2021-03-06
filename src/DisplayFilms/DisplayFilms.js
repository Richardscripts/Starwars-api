import React from 'react';
import loopThroughResults from '../HelperFunctions/loopThroughResults';

export default class DisplayFilms extends React.Component {
  render() {
    let filmsResults = this.props.films.map((films, idx) => {
      const array = loopThroughResults(films, this.props.dataForArrays).map(
        (results, idx) => {
          return <li key={idx}>{results}</li>;
        }
      );
      return (
        <ul key={idx} className='results-content'>
          <li>
            <h2>{films.title}</h2>
          </li>
          {array}
        </ul>
      );
    });
    return <>{filmsResults}</>;
  }
}
