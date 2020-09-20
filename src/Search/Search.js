import React from 'react';
import URL from '../config';
import './Search.css';
import ErrorMaster from '../ErrorBoundaries/ErrorMaster';
import NextPageButton from '../NextPageButton/NextPageButton';
import PrevPageButton from '../PrevPageButton/PrevPageButton';
import DisplayResults from '../DisplayResults/DisplayResults';
import Fieldset from '../Fieldset/Fieldset';
import MoreInfo from '../MoreInfo/MoreInfo';

export default class Search extends React.Component {
  state = {
    dataSearch: [],
    dataForArrays: {
      people: [],
      films: [],
      planets: [],
      species: [],
      vehicles: [],
      starships: [],
    },
    dataTypes: [],
    nextLink: null,
    prevLink: null,
    pageNum: '',
    charInput: '',
    selectInput: '',
    selected: '',
    moreInfo: false,
    error: null,
    noResult: false,
  };

  constructor(props) {
    super(props);
    this.characterInput = React.createRef();
  }

  componentDidMount() {
    this.props.toggleLoading();
    fetch(`${URL}/`)
      .then((res) => {
        return res.json();
      })
      .then((types) => {
        let typesArray = [];
        for (let key in types) {
          typesArray.push(key);
        }
        this.setState({
          dataTypes: [...typesArray],
        });
        this.grabInitial();
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          error,
        });
      });
  }

  grabInitial = () => {
    let urls = [];
    let data = this.state.dataTypes;
    for (let i = 0; i < data.length; i++) {
      urls.push(fetch(`${URL}/${data[i]}`));
    }
    Promise.all(urls)
      .then((values) => {
        return Promise.all(values.map((v) => v.json()));
      })
      .then((values) => {
        for (let i = 0; i < data.length; i++) {
          this.setState({
            dataForArrays: {
              ...this.state.dataForArrays,
              [data[i]]: [...values[i].results],
            },
          });
          this.grabAll(values[i].count, data[i]);
        }
        this.props.toggleLoading();
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          error,
        });
      });
  };

  grabAll = (count, type) => {
    let urls = [];
    let length = Math.ceil(count) / 10;
    for (let i = 1; i < length; i++) {
      urls.push(fetch(`${URL}/${type}/?page=${i + 1}`));
    }
    Promise.all(urls)
      .then((values) => {
        return Promise.all(values.map((v) => v.json()));
      })
      .then((values) => {
        let temp = [];
        for (let i = 0; i < values.length; i++) {
          temp.push(...values[i].results);
        }
        this.setState({
          dataForArrays: {
            ...this.state.dataForArrays,
            [type]: [...this.state.dataForArrays[type], ...temp],
          },
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          error,
        });
      });
  };

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

  handleToggleMoreInfo = (e) => {
    this.setState({
      moreInfo: !this.state.moreInfo,
    });
  };

  nextPageUpdateState = (data) => {
    if (data.next) {
      this.setState({
        dataSearch: data.results,
        nextLink: data.next,
        prevLink: data.previous,
        pageNum: data.next.match('[0-9]+')[0] - 1,
        noResult: false,
      });
    } else {
      this.setState({
        dataSearch: data.results,
        nextLink: data.next,
        prevLink: data.previous,
        pageNum: parseInt(data.previous.match('[0-9]+')[0]) + 1,
        noResult: false,
      });
    }
    this.props.toggleLoading();
    if (data.results.length === 0) {
      this.setState({
        noResult: true,
      });
    }
  };

  prevPageUpdateState = (data) => {
    this.setState({
      dataSearch: data.results,
      nextLink: data.next,
      prevLink: data.previous,
      pageNum: data.next.match('[0-9]+')[0] - 1,
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
          dataSearch: data.results,
          nextLink: data.next,
          prevLink: data.previous,
          noResult: false,
          selected: this.state.selectInput,
          pageNum: '',
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
    console.log(this.state.selected);
    return (
      <>
        <ErrorMaster>
          <Fieldset
            loading={this.props.loading}
            handleInput={this.handleInput}
            handleSelect={this.handleSelect}
            handleSubmit={this.handleSubmit}
            characterInput={this.characterInput}
            selectInput={this.state.selectInput}
            handleToggleMoreInfo={this.handleToggleMoreInfo}
            moreInfo={this.state.moreInfo}
            selectedInput={this.state.slectedInput}
          />
          <div className='page-buttons'>
            <PrevPageButton
              prevLink={this.state.prevLink}
              prevPageUpdateState={this.prevPageUpdateState}
              toggleLoading={this.props.toggleLoading}
            />
            {this.state.pageNum && (
              <div className='page'>
                Pg: <strong>{this.state.pageNum}</strong>
              </div>
            )}
            <NextPageButton
              nextLink={this.state.nextLink}
              nextPageUpdateState={this.nextPageUpdateState}
              toggleLoading={this.props.toggleLoading}
            />
          </div>
          {this.state.dataSearch.length > 0 && <hr />}
          {this.state.error && <span>Sorry: {this.state.error}</span>}
          {this.state.noResult && <span>Sorry: No results found.</span>}
          {this.state.moreInfo && (
            <>
              <MoreInfo selectInput={this.state.selectInput} />
            </>
          )}
          <DisplayResults state={this.state} />
          {this.state.dataSearch.length > 0 && <hr />}
          <div className='page-buttons'>
            <PrevPageButton
              prevLink={this.state.prevLink}
              prevPageUpdateState={this.prevPageUpdateState}
              toggleLoading={this.props.toggleLoading}
            />
            {this.state.pageNum && (
              <div className='page'>
                Pg: <strong>{this.state.pageNum}</strong>
              </div>
            )}
            <NextPageButton
              nextLink={this.state.nextLink}
              nextPageUpdateState={this.nextPageUpdateState}
              toggleLoading={this.props.toggleLoading}
            />
          </div>
        </ErrorMaster>
      </>
    );
  }
}
