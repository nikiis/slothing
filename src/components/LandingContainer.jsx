import React from 'react';
import { Link } from 'gatsby';
import image1_sewing from '../images/homepage_1.png';
import trashpile from '../images/trashpile.png';

function LandingContainer() {
    return (
        <section className="landing-container">
            <div className="part-1">
                <div className="text-section">
                    <h1>
                        Stop the <span>fast</span> in fast fashion.
                    </h1>
                    <p>
                        The fashion industry is one of the most wasteful industries in the world. We are here to change
                        that. Bringing together sustainable brands and garment makers, we help sell clothes that are
                        meant to last and be repaired, and once they have run their course, get upcycled and recycled.
                    </p>
                    <Link to="/shop/">shop now</Link>
                </div>
                <div className="image-section">
                    <img src={image1_sewing} alt="woman and a sewing machine"></img>
                </div>
            </div>
            <hr className="left" />

            <div className="problem-statement">
                <div className="trashpile">
                    <img src={trashpile} alt="pile of trashed clothes"></img>
                </div>
                <div className="problem-text">
                    <h2>
                        Globally <span>92 million</span> tonnes of textiles are wasted each year.
                    </h2>
                </div>
            </div>
            <hr className="right" style={{ marginBottom: '250px' }} />

            <div className="mission-statement">
                <div className="mission-text">
                    <h2>
                        Our mission <br /> <span>statement.</span>
                    </h2>
                    <p>Creating durable clothing items that can be repaired, repurposed and reused.</p>
                    <p>
                        Our sellers make orders in small batches, reducing fabric offcuts and surplus clothing. Once
                        garments are no longer suitable to be repaired, they can be sent to a select few recycling
                        centres that recycle and repurpose them into compost, furniture or even rugs.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default LandingContainer;
