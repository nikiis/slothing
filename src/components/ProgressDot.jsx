import React from 'react';
import '../styles/trackprocess.scss';

function ProgressDot(props) {
    const styles = { active: '#E83F6F', completed: '#67CBA6', blocked: '#FFBF00' };

    function getStyle(id, currStep) {
        console.log(currStep);
        if (id === currStep) return styles.active;
        if (id < currStep) return styles.completed;
        return styles.blocked;
    }

    return (
        <div
            onClick={() => props.onDotClick(props.id)}
            className="circle"
            style={{ backgroundColor: getStyle(props.id, props.step) }}></div>
    );
}

export default ProgressDot;
