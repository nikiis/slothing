import React from 'react';
import Navbar from '../components/Navbar';
import TrackingContainer from '../components/TrackingContainer';

export default function trackpage() {
    return (
        <section className="trackingpage">
            <Navbar />
            <TrackingContainer />
        </section>
    );
}
