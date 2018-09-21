// import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../App';


// const Game = (props) => {

//     return (
//         <div>
//             <App message={this.props.message} />
//         </div>
//     );

// };


const mapStateToProps = state => ({
    message: state.message,
});

const Game = connect(
    mapStateToProps,
)(App);


export default (Game);
