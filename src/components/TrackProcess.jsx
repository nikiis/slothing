import React from 'react';
import '../styles/trackprocess.scss';

function TrackProcess(props) {
    return (
        <div className="process-container">
            <h2>{props.title}</h2>
            <div className="process-info">
                <div className="process-text">
                    <p>{props.body}</p>
                </div>
                <div className="process-img">
                    <img src={props.img} alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default TrackProcess;
