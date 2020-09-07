import React from 'react';

export default function Fieldset(props) {
  return (
    <div className='search-bar'>
      <fieldset>
        <legend>Search</legend>
        <form onSubmit={(e) => props.handleSubmit(e)} action='#'>
          <label htmlFor='Search'>Enter Search Terms: </label>
          <input
            type='text'
            name='Search'
            id='Search'
            onChange={(e) => props.handleInput(e)}
            ref={props.characterInput}
          />
          <button
            type='submit'
            disabled={props.loading || props.selectInput === ''}
          >
            Submit
          </button>
        </form>

        <select onChange={(e) => props.handleSelect(e)}>
          <option value=''>Search Type</option>
          <option value='people'>Characters</option>
          <option value='planets'>Planets</option>
          <option value='starships'>Starships</option>
          <option value='vehicles'>Vehicles</option>
          <option value='films'>Films</option>
          <option value='species'>Species</option>
        </select>
      </fieldset>
    </div>
  );
}
