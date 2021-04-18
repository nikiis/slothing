import React from 'react';
import Navbar from '../components/Navbar';
import VirtualRoomContainer from '../components/VirtualRoomContainer';

export default function virtualroom() {
    return (
        <section className="virtualroom">
            <Navbar />
            <VirtualRoomContainer />
        </section>
    );
}
