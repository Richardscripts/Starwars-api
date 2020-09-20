import React from 'react';
import './Fieldset.css';

export default function Fieldset(props) {
  return (
    <div className='search-bar'>
      <fieldset>
        <form onSubmit={(e) => props.handleSubmit(e)} action='#'>
          <label htmlFor='search'>Enter Search Terms: </label>
          <input
            aria-label='Type in a term to search the Star Wars database'
            type='text'
            name='s earch'
            id='search'
            onChange={(e) => props.handleInput(e)}
            ref={props.characterInput}
            placeholder='Search All'
          />
          <button
            type='submit'
            disabled={props.loading || props.selectInput === ''}
          >
            Submit
          </button>
        </form>
        <select
          aria-label='Select a category to search through. such as characters.'
          aria-required='true'
          aria-describedby='choose'
          id='select'
          onChange={(e) => props.handleSelect(e)}
        >
          <option id='choose' value=''>
            Choose Category
          </option>
          <option value='people'>Characters</option>
          <option value='planets'>Planets</option>
          <option value='starships'>Starships</option>
          <option value='vehicles'>Vehicles</option>
          <option value='films'>Films</option>
          <option value='species'>Species</option>
        </select>
        {props.selectInput && (
          <div className='tool-tips'>
            <div className='tool-tip-message'>Legend:</div>
            <div className='onoffswitch'>
              <input
                aria-label='A toggle on and off switch to output additional information'
                type='checkbox'
                name='onoffswitch'
                className='onoffswitch-checkbox'
                id='myonoffswitch'
                value={true}
                onChange={(e) => props.handleToggleMoreInfo(e)}
              />
              <label className='onoffswitch-label' htmlFor='myonoffswitch'>
                <span className='onoffswitch-inner'></span>
                <span className='onoffswitch-switch'></span>
              </label>
            </div>
          </div>
        )}
      </fieldset>
    </div>
  );
}
