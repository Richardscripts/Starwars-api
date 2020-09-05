import React from 'react';
import URL from '../config';
import './Search.css';
import ErrorMaster from '../ErrorBoundaries/ErrorMaster';
import NextPage from '../NextPage/NextPage';
import DisplayResults from '../DisplayResults/DisplayResults';

export default class Search extends React.Component {
  state = {
    data: [],
    nextLink: '',
    charInput: '',
    selectInput: '',
    error: null,
    noResult: false,
    touched: false,
  };

  constructor(props) {
    super(props);
    this.characterInput = React.createRef();
  }

  handleInput = (e) => {
    const input = this.characterInput.current.value;
    this.setState({
      charInput: input,
    });
  };

  handleSelect = (e) => {
    this.setState({
      selectInput: e.target.value,
    });
  };

  nextPageUpdateState = (data) => {
    this.setState({
      data: data.results,
      nextLink: data.next,
      noResult: false,
    });
    this.props.toggleLoading();
    if (data.results.length === 0) {
      this.setState({
        noResult: true,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.toggleLoading();
    fetch(`${URL}/${this.state.selectInput}/?search=${this.state.charInput}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          Promise.reject(res.message);
        }
      })
      .then((data) => {
        this.setState({
          data: data.results,
          nextLink: data.next,
          noResult: false,
        });
        this.props.toggleLoading();
        if (data.results.length === 0) {
          this.setState({
            noResult: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          error,
        });
      });
  };

  render() {
    return (
      <>
        <div className='search-bar'>
          <fieldset>
            <legend>Search</legend>
            <form onSubmit={(e) => this.handleSubmit(e)} action='#'>
              <label htmlFor='Search'>Enter Search Terms: </label>
              <input
                type='text'
                name='Search'
                id='Search'
                onChange={(e) => this.handleInput(e)}
                ref={this.characterInput}
              />
              <button type='submit' disabled={this.state.selectInput === ''}>
                Submit
              </button>
            </form>

            <select onChange={(e) => this.handleSelect(e)}>
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
        <ErrorMaster>
          <NextPage
            nextLink={this.state.nextLink}
            nextPageUpdateState={this.nextPageUpdateState}
            toggleLoading={this.props.toggleLoading}
          />
          {this.state.error && <span>Sorry: {this.state.error}</span>}
          {this.state.noResult && <span>Sorry: No results found.</span>}
          <DisplayResults state={this.state} />
          <NextPage
            nextLink={this.state.nextLink}
            nextPageUpdateState={this.nextPageUpdateState}
            toggleLoading={this.props.toggleLoading}
          />
        </ErrorMaster>
      </>
    );
  }
}
