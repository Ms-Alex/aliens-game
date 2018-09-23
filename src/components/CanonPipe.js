import React from 'react';

const CanonPipe = (props) => {
    const canonPipeStyle = {
        fill: '#999',
        stroke: '#666',
        strokeWidth: '2px'
    }

    const transform = `rotate(${props.rotation}, 0, 0)`;

    const muzzleWidth = 40;
    const halfMuzzle = 20;
    const height = 100;
    const yBase = 70;

    return (
        <g transform={transform} >
            
            <path
                style={canonPipeStyle}
                d={ `M${-halfMuzzle} ${-yBase} C -40 ${height*1.7}, 80 ${height*1.7}, ${muzzleWidth} 0` }
            />

            <line
                x1={-halfMuzzle}
                y1={-yBase}
                x2={halfMuzzle}
                y2={-yBase}
                style={canonPipeStyle}
            />

        </g>
    );
}

export default CanonPipe;
