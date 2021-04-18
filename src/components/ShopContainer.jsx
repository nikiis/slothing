import React from 'react';
import springpic from '../images/spring_pic.png';
import { Link } from 'gatsby';
import ClothesGrid from './ClothesGrid';

function ShopContainer() {
    return (
        <div className="shop-content-container">
            <div className="shop-header">
                <div className="shop-header-background"></div>
                <div className="shop-header-text">
                    <h1>Shop the new Spring collection.</h1>
                    <Link to="#">Shop now</Link>
                </div>
                <div className="shop-header-image">
                    <img src={springpic} alt="woman in stylish clothes"></img>
                </div>
            </div>
            <hr className="center" />
            <div className="clothes-container">
                <ClothesGrid/>
            </div>
        </div>
    );
}

export default ShopContainer;
