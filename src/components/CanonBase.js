import React from 'react';

const CanonBase = (props) => {

    const canonBaseStyle = {
        fill: '#a16012',
        stroke: '#75450e',
        strokeWidth: '2px'
    }

    const baseWidth = 80;
    const halfBase = 40;
    const height = 60;
    const negativeHeight = height * -1;



    return (
        <g>

            <path 
                style={canonBaseStyle} 
                d={ `M${-halfBase} ${height} C 20 ${negativeHeight}, 60 ${negativeHeight}, ${baseWidth} 0` } 
            />

            <line
                x1={-halfBase}
                y1={height}
                x2={halfBase}
                y2={height}
                style={canonBaseStyle}
            />
            
        </g>
    );
}

export default CanonBase;
