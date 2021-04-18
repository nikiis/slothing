import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Char from './Char.js';
import { OrbitControls } from '@react-three/drei';
import '../styles/virtualroomcontainer.scss';

function VirtualRoomContainer() {
    return (
        <div className="virtualroom-container">
            <h2>Please wait... the 3d model takes a while to load...</h2>
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={0.6} />
                <directionalLight intensity={0.5} />
                <Suspense fallback={null}>
                    <Char />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default VirtualRoomContainer;
