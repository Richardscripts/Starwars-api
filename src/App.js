import React from 'react';
import Search from './Search/Search';
import Header from './Header/Header.js';
import './App.css';
import loading from './images/loading.gif';
import ErrorMaster from './ErrorBoundaries/ErrorMaster';

class App extends React.Component {
  state = {
    loading: false,
  };

  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading,
    });
  };

  render() {
    return (
      <ErrorMaster>
        <div className='App'>
          <Header />
          <Search toggleLoading={this.toggleLoading} />
          {this.state.loading && (
            <img
              src={loading}
              alt='A loading progress wheel indicating the data is still loading'
            />
          )}
        </div>
      </ErrorMaster>
    );
  }
}

export default App;
