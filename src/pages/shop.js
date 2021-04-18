import React from 'react';
import Navbar from '../components/Navbar';
import ShopContainer from '../components/ShopContainer';
import '../styles/shop.scss';

export default function Shop() {
    return (
        <div className="shop-container">
            <Navbar />
            <ShopContainer />
        </div>
    );
}
