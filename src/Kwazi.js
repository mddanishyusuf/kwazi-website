import React, { useEffect, useState } from 'react';
import axios from 'axios';

import WhoWeAre from './components/WhoWeAre';
import Work from './components/Work';
import AboutKwazi from './components/AboutKwazi';
import Zenith from './components/Zenith';
import ImBored from './components/ImBored';
import ContactUs from './components/ContactUs';

import './app.scss';
import './static/animation.scss';

function Kwazi() {
    const [data, setData] = useState({});
    const [whichLayer, setWhichLayer] = useState(null);

    const [hideBox, setHideBox] = useState(true);

    useEffect(() => {
        async function fetchMyAPI() {
            const url = 'http://something';
            const config = {};
            const response = await axios.get(
                'https://raw.githubusercontent.com/shubhendumitra123/kwazi-data/master/kwazi.json'
            );
            setData(response.data);
            console.log(response);
        }

        fetchMyAPI();
    }, []);

    // useEffect(async () => {
    //     await axios.get('https://raw.githubusercontent.com/kwazidesign/kwazi-web-data/master/kwazi.json').then(res => {
    //         setData(res.data);
    //         console.log(res.data);
    //     });
    // }, []);

    function clickOnLetter(e) {
        e.preventDefault();
        setHideBox(true);
        console.log(e.target.getAttribute('name'));
        setWhichLayer(e.target.getAttribute('name'));
    }

    function hideLayer() {
        setHideBox(false);
        setTimeout(() => {
            setWhichLayer(null);
        }, 300);
    }

    return (
        <div className="container">
            <div className="who-we-are landing-section">
                <div className="landing-page wrapper">
                    <div className="kwazi-title text-animation">
                        <h2>
                            <div className="logo-title">
                                <div>
                                    <span name="WhoWeAre" onClick={clickOnLetter} role="presentation">
                                        K
                                    </span>
                                </div>
                                <div>
                                    <span name="Work" onClick={clickOnLetter} role="presentation">
                                        W
                                    </span>
                                </div>
                                <div>
                                    <span name="AboutKwazi" onClick={clickOnLetter} role="presentation">
                                        A
                                    </span>
                                </div>
                                <div className="blog-link">
                                    <span>
                                        <a
                                            href="https://medium.com/@kwaziverse"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            {' '}
                                            :{' '}
                                        </a>
                                    </span>
                                </div>
                                <div>
                                    <span name="Zenith" onClick={clickOnLetter} role="presentation">
                                        Z
                                    </span>
                                </div>
                                <div>
                                    <span name="ImBored" onClick={clickOnLetter} role="presentation">
                                        I
                                    </span>
                                </div>
                            </div>
                        </h2>
                        <div className="tag-line">branding & design humans</div>
                    </div>
                    <div className="contact-us-home" name="ContactUs" onClick={clickOnLetter} role="presentation">
                        Contact Us
                    </div>
                </div>
            </div>
            {whichLayer === 'WhoWeAre' ? (
                <div
                    id="modal-container"
                    className={!hideBox ? 'who-we-are section four out' : 'who-we-are section four modal-active'}
                >
                    <div className="section-inner modal-background">
                        <WhoWeAre {...data} hideEvent={hideLayer} clickFromChild={clickOnLetter} />
                        <div className="contact-us" name="ContactUs" onClick={clickOnLetter} role="presentation">
                            Contact Us
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            {whichLayer === 'Work' ? (
                <div
                    className={!hideBox ? 'kwazi-work section four out' : 'kwazi-work section four modal-active'}
                    id="modal-container"
                >
                    <div className="section-inner modal-background">
                        <Work {...data} hideEvent={hideLayer} />
                        <div className="contact-us" name="ContactUs" onClick={clickOnLetter} role="presentation">
                            Contact Us
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            {whichLayer === 'AboutKwazi' ? (
                <div
                    className={!hideBox ? 'about-kwazi section four out' : 'about-kwazi section four modal-active'}
                    id="modal-container"
                >
                    <div className="section-inner modal-background">
                        <AboutKwazi {...data} hideEvent={hideLayer} clickFromChild={clickOnLetter} />
                        <div className="contact-us" name="ContactUs" onClick={clickOnLetter} role="presentation">
                            Contact Us
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            {whichLayer === 'Zenith' ? (
                <div
                    className={!hideBox ? 'zenith section four out' : 'zenith section four modal-active'}
                    id="modal-container"
                >
                    <div className="section-inner modal-background">
                        <Zenith {...data} hideEvent={hideLayer} />
                        <div className="contact-us" name="ContactUs" onClick={clickOnLetter} role="presentation">
                            Contact Us
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            {whichLayer === 'ImBored' ? (
                <div
                    className={!hideBox ? 'i-am-board section four out' : 'i-am-board section four modal-active'}
                    id="modal-container"
                >
                    <div className="section-inner modal-background">
                        <ImBored {...data} hideEvent={hideLayer} />
                        <div className="contact-us" name="ContactUs" onClick={clickOnLetter} role="presentation">
                            Contact Us
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            {whichLayer === 'ContactUs' ? (
                <div className="i-am-board section four" id="modal-container">
                    <div className="section-inner modal-background">
                        <ContactUs {...data} hideEvent={hideLayer} />
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default Kwazi;
