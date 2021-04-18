import React from 'react';
import clothesrail from '../images/clothesrail.png';
import '../styles/fittingroomcontainer.scss';
import { Link } from 'gatsby';

function FittingRoomContainer() {
    return (
        <div className="fittingroom-container">
            <div className="fitting-header">
                <div className="clothesrail-pic">
                    <img src={clothesrail} alt="clothes rail"></img>
                </div>
                <div className="heading-text">
                    <h1>
                        <span>Your</span> virtual fitting room.
                    </h1>
                </div>
            </div>
            <hr className="right" style={{ marginBottom: '250px' }} />

            <div className="about-vfm">
                <div className="vfm-text">
                    <h2>
                        How it <br /> <span>works.</span>
                    </h2>
                    <p>
                        Take your body measurements and use our custom system to create a full body avatar, that will
                        try on the clothes you picked before placing an order - How handy!
                    </p>
                    <p>All our garments are size-inclusive, and so are our avatars.</p>
                    <div className="try-button">
                        <Link to="/virtualroom/">Try it now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FittingRoomContainer;
