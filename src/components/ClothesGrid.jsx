import React from 'react';
import tshirt from '../images/tshirt.png';
import jeans from '../images/jeans.png';
import dress from '../images/dress.png';
import lounge from '../images/lounge.png';
import BrowseLink from './BrowseLink';
import '../styles/clothesgrid.scss';

function ClothesGrid() {
    return (
        <div className="clothesgrid-container">
            <div className="tops item">
                <div className="item-pic">
                    <img src={tshirt} alt="t-shirt"></img>
                </div>

                <div className="item-text">
                    <h2>Tops</h2>
                    <p>Designed for every occasion</p>
                    <BrowseLink />
                </div>
            </div>
            <div className="jeans item">
                <div className="item-text">
                    <h2>Jeans</h2>
                    <p>Made to be comfortable and durable</p>
                    <BrowseLink />
                </div>
                <div className="item-pic">
                    <img src={jeans} alt="jeans"></img>
                </div>
            </div>
            <div className="dress item">
                <div className="item-pic">
                    <img src={dress} alt="dress"></img>
                </div>
                <div className="item-text">
                    <h2>Dress</h2>
                    <p>Get ready to dress to impress</p>
                    <BrowseLink />
                </div>
            </div>
            <div className="lounge item">
                <div className="item-text">
                    <h2>Lounge</h2>
                    <p>Perfect for those netflix and chill times</p>
                    <BrowseLink />
                </div>
                <div className="item-pic">
                    <img src={lounge} alt="lounge wear"></img>
                </div>
            </div>
        </div>
    );
}

export default ClothesGrid;
