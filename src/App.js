import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';
import { getCanvasPosition } from './utils/formulas';

class App extends Component {

  componentDidMount() {
    setInterval(() => {
      this.props.moveObjects(this.canvasMousePosition);
    }, 10);
  };

  trackMouse = (event) => {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    return (
      <div className="App">

        <Canvas angle={this.props.angle} trackMouse={(event) => this.trackMouse(event)} />

      </div>
    );
  }
};

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
}

export default App;
