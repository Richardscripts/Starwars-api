import React from 'react';

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const loopThroughResults = (object, data) => {
  let array = [];
  for (let key in object) {
    const keyPretty = key.replace(/_/g, ' ');
    if (!object[key]) {
    } else if (object[key].length === 0) {
    } else if (key === 'films') {
      array.push(
        <>
          <span>{key}:</span> {loopThroughFilms(key, object, data)}
        </>
      );
    } else if (key === 'species') {
      array.push(
        <>
          <span>{key}:</span> {loopThroughArrays(key, object, data, 'species')}
        </>
      );
    } else if (key === 'vehicles') {
      array.push(
        <>
          <span>{key}:</span> {loopThroughArrays(key, object, data, 'vehicles')}
        </>
      );
    } else if (key === 'homeworld') {
      array.push(
        <>
          <span>{key}:</span> {loopThroughHomeworld(key, object, data)}
        </>
      );
    } else if (key === 'planets') {
      array.push(
        <>
          <span>{key}:</span> {loopThroughArrays(key, object, data, 'planets')}
        </>
      );
    } else if (key === 'residents') {
      array.push(
        <>
          <span>{key}:</span> {loopThroughArrays(key, object, data, 'people')}
        </>
      );
    } else if (key === 'people') {
      array.push(
        <>
          <span>{key}:</span> {loopThroughArrays(key, object, data, 'people')}
        </>
      );
    } else if (key === 'pilots') {
      array.push(
        <>
          <span>{key}:</span> {loopThroughArrays(key, object, data, 'people')}
        </>
      );
    } else if (key === 'characters') {
      array.push(
        <>
          <span>{key}:</span> {loopThroughArrays(key, object, data, 'people')}
        </>
      );
    } else if (key === 'starships') {
      array.push(
        <>
          <span>{key}:</span>{' '}
          {loopThroughArrays(key, object, data, 'starships')}
        </>
      );
    } else if (key === 'opening_crawl') {
      array.push(
        <>
          <span>{keyPretty}:</span> <em>{object[key]}</em>
        </>
      );
    } else if (key === 'created') {
      let date = new Date(object[key]);
      array.push(
        <span className='extra-info'>
          <i>{key}:</i> <i>{date.toLocaleDateString(undefined, options)} </i>
        </span>
      );
    } else if (key === 'release_date') {
      let date = new Date(object[key]);
      array.push(
        <>
          <span>{keyPretty}:</span>{' '}
          {date.toLocaleDateString(undefined, options)}
        </>
      );
    } else if (key === 'edited') {
      let date = new Date(object[key]);
      array.push(
        <span className='extra-info'>
          <i>{key}:</i> <i>{date.toLocaleDateString(undefined, options)}</i>
        </span>
      );
    } else if (key === 'url') {
      array.push(
        <span className='extra-info'>
          <i>Api {key}:</i>{' '}
          <i>
            <em>{object[key]}</em>
          </i>
        </span>
      );
    } else if (key === 'height') {
      array.push(
        <>
          <span>{keyPretty}:</span> {object[key]} centimeters.
        </>
      );
    } else if (key === 'mass') {
      array.push(
        <>
          <span>{keyPretty}:</span> {object[key]} kilograms.
        </>
      );
    } else if (key === 'cost_in_credits') {
      array.push(
        <>
          <span>{keyPretty}:</span> {object[key]} Galatic Credits.
        </>
      );
    } else if (key === 'length') {
      array.push(
        <>
          <span>{keyPretty}:</span> {object[key]} meters.
        </>
      );
    } else if (key === 'cargo_capacity') {
      array.push(
        <>
          <span>{keyPretty}:</span> {object[key]} kilograms.
        </>
      );
    } else if (key === 'average_height') {
      array.push(
        <>
          <span>{keyPretty}:</span> {object[key]} centimeters.
        </>
      );
    } else if (key === 'average_lifespan') {
      array.push(
        <>
          <span>{keyPretty}:</span> {object[key]} years.
        </>
      );
    } else if (key === 'diameter') {
      array.push(
        <>
          <span>{keyPretty}:</span> {object[key]} kilometers.
        </>
      );
    } else if (key === 'rotation_period') {
      array.push(
        <>
          <span>{keyPretty}:</span> {object[key]} hours.
        </>
      );
    } else if (key === 'orbital_period') {
      array.push(
        <>
          <span>{keyPretty}:</span> {object[key]} days.
        </>
      );
    } else {
      array.push(
        <>
          <span>{keyPretty}:</span> {object[key]}
        </>
      );
    }
  }

  return array.slice(1, array.length);
};

function loopThroughFilms(key, object, data) {
  let filmArray = [];
  let filmKey = object[key];
  for (let i = 0; i < filmKey.length; i++) {
    for (let n = 0; n < data.films.length; n++) {
      if (filmKey[i] === data.films[n].url) {
        if (i === filmKey.length - 1) {
          filmArray.push(` ${data.films[n].title}.`);
        } else {
          filmArray.push(` ${data.films[n].title},`);
        }
      }
    }
  }
  return filmArray;
}

function loopThroughHomeworld(key, object, data) {
  let planetsArray = [];
  let planetsKey = object[key];
  planetsArray.push(
    ` ${data.planets[planetsKey.match('[0-9]+')[0] - 1].name}.`
  );
  return planetsArray;
}

function loopThroughArrays(key, object, data, type) {
  let array = [];
  let value = object[key];
  for (let i = 0; i < value.length; i++) {
    for (let n = 0; n < data[type].length; n++) {
      if (value[i] === data[type][n].url) {
        if (i === value.length - 1) {
          array.push(` ${data[type][n].name}.`);
        } else {
          array.push(` ${data[type][n].name},`);
        }
      }
    }
  }
  return array;
}

export default loopThroughResults;
