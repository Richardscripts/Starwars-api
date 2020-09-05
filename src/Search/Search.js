import React from 'react';
import URL from '../config';
import './Search.css';
import ErrorMaster from '../ErrorBoundaries/ErrorMaster';
import NextPage from '../NextPage/NextPage';
import DisplayResults from '../DisplayResults/DisplayResults';
import Fieldset from '../Fieldset/Fieldset';

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
        <ErrorMaster>
          <Fieldset
            handleInput={this.handleInput}
            handleSelect={this.handleSelect}
            handleSubmit={this.handleSubmit}
            characterInput={this.characterInput}
            selectInput={this.state.selectInput}
          />
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
