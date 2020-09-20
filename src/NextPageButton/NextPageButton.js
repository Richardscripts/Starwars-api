import React from 'react';

export default class NextPageButton extends React.Component {
  state = {
    next: null,
  };

  handleNextPage = (e) => {
    e.preventDefault();
    this.props.toggleLoading();
    fetch(this.props.nextLink)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          Promise.reject(res.message);
        }
      })
      .then((data) => {
        this.setState({
          next: data.next,
        });
        this.props.nextPageUpdateState(data);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <>
        <div className='button-wrapper'>
          {this.props.nextLink && (
            <button
              className='nextButton'
              onClick={(e) => this.handleNextPage(e)}
            >
              Next Page
            </button>
          )}
        </div>
      </>
    );
  }
}
