import React from 'react';

export default class PrevPageButton extends React.Component {
  handlePrevPage = (e) => {
    e.preventDefault();
    this.props.toggleLoading();
    fetch(this.props.prevLink)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          Promise.reject(res.message);
        }
      })
      .then((data) => {
        this.props.prevPageUpdateState(data);
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
          {this.props.prevLink && (
            <button
              className='nextButton'
              onClick={(e) => this.handlePrevPage(e)}
            >
              Prev Page
            </button>
          )}
        </div>
      </>
    );
  }
}
