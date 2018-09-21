import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>We will create a game using react with redux and svg!</h2>
        <h3>{this.props.message}</h3>
      </div>
    );
  }
};

App.propTypes = {
  message: PropTypes.string.isRequired,
}

export default App;
