import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CanonBase from './CanonBase';
import CanonPipe from './CanonPipe';

const Canvas = (props) => {
    const style = {
        border: '1px solid black'
    }

    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

    console.log(props.angle);
    
    return (
        // xMaxYMax none on it to force uniform scaling of your canvas and its elements.
        <svg 
            id="aliens-game-canvas" 
            onMouseMove={props.trackMouse} 
            preserveAspectRatio="xMaxYMax none" 
            viewBox={viewBox} 
            style={style}
        >

            <Sky />
            <Ground />

            <CanonPipe rotation={props.angle} />            
            <CanonBase />

        </svg>
    );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired,
}

export default Canvas;
