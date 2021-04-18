import React from 'react';
import logo from '../images/logo.svg';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'gatsby';

function Navbar() {
    return (
        <section className="navbar">
            <div className="logo">
                <img src={logo} alt="Slothing logo"></img>
                <h1>slothing</h1>
            </div>

            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/shop/">shop</Link>
                </li>
                <li>
                    <Link to="/fittingroom/">fitting room</Link>
                </li>
                <li>
                    <Link to="/trackingpage/">login</Link>
                </li>
                <li>
                    <FaShoppingCart />
                </li>
            </ul>
        </section>
    );
}

export default Navbar;
