import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CanonBase from './CanonBase';
import CanonPipe from './CanonPipe';

const Canvas = () => {
    const style = {
        border: '1px solid black'
    }

    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

    return (
        // xMaxYMax none on it to force uniform scaling of your canvas and its elements.
        <svg id="aliens-game-canvas" preserveAspectRatio="xMaxYMax none" viewBox={viewBox} style={style}>

            <Sky />
            <Ground />

            <CanonPipe rotation={45} />            
            <CanonBase />

        </svg>
    );
};

export default Canvas;
