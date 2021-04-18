import React, { useState } from 'react';
import '../styles/trackingcontainer.scss';
import TrackProcess from './TrackProcess';
import ProgressDot from './ProgressDot';
import patternCutting from '../images/pattern_cutting.png';
import sewing from '../images/sewing.png';
import finishingTouches from '../images/finishing_touches.png';
import delivery from '../images/delivery.png';
import plant from '../images/plant.png';

const processes = [
    {
        img: patternCutting,
        title: 'Pattern Cutting.',
        body:
            'Sam is carefully and delicately cutting out the pattern for your garment. This is a century-old and skilled practice, that requires mathematical calculations to create a beautifully crafted garment',
    },
    {
        img: sewing,
        title: 'Sewing.',
        body:
            'Each garment is sewn by hand and requires an excellent eye to detail and refined  techniques. This process takes time, to ensure you receive a perfectly made item. ',
    },
    {
        img: finishingTouches,
        title: 'Finishing touches.',
        body: 'Anyone wanted buttons? Your garment is being hand finished, to ensure a clean finish to your garment.',
    },
    {
        img: delivery,
        title: 'Out for delivery.',
        body:
            'Alex will be at your doorstep shortly! We only deliver with a select few delivery companies, that use green sources of energy, including electric and hydrogen couriers.',
    },
    {
        img: plant,
        title: 'How your order impacts our planet.',
        body:
            'We are collaborating with Plant A Tree to contribute to a healthier and greener environment, and your order enables us to do just that. You rock!',
    },
];

function TrackingContainer() {
    const [step, setStep] = useState(0);

    function onDotClick(id) {
        setStep(id + 1);
    }

    function getTitle() {
        if (step === processes.length - 1) {
            return 'Thank you for ordering with us!';
        } else if (step === processes.length - 2) {
            return 'Your item is being delivered by Alex';
        }
        const sam = <span>Sam</span>;
        return <div>Your item is being made by {sam}!</div>;
    }

    function generateProcesses() {
        return processes.map((_, i, arr) =>
            arr.length - 1 !== i ? <ProgressDot id={i} key={i} step={step} onDotClick={onDotClick} /> : null
        );
    }

    return (
        <div className="trackingcontainer">
            <div className="tracking-heading">
                <h1>{getTitle()}</h1>
            </div>

            <div className="tracker">
                <div className="line"></div>
                <div className="circles">{generateProcesses()}</div>
            </div>
            <TrackProcess title={processes[step].title} body={processes[step].body} img={processes[step].img} />
        </div>
    );
}

export default TrackingContainer;
