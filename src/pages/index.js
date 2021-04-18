// index.js code
import React from 'react';
import Navbar from '../components/Navbar';
import LandingContainer from '../components/LandingContainer';
import '@fontsource/barlow';
import '@fontsource/barlow/700.css';
import '@fontsource/lato';
import '../styles/home.scss';

export default function Home() {
    return (
        <main>
            <Navbar />
            <div className="homepage-container">
                <LandingContainer />
            </div>
        </main>
    );
}
