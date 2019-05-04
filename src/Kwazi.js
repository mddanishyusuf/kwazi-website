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

    useEffect(() => {
        async function fetchMyAPI() {
            const url = 'http://something';
            const config = {};
            const response = await axios.get(
                'https://raw.githubusercontent.com/mddanishyusuf/profile-with-github/master/kwazi.json'
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
        console.log(e.target.getAttribute('name'));
        setWhichLayer(e.target.getAttribute('name'));
    }

    function hideLayer() {
        setWhichLayer(null);
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
                                <div>
                                    <span name="Blog" onClick={clickOnLetter} role="presentation">
                                        :
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
                </div>
            </div>
            {whichLayer === 'WhoWeAre' ? (
                <div className="who-we-are section four" id="modal-container">
                    <div className="section-inner modal-background">
                        <WhoWeAre {...data} hideEvent={hideLayer} />
                        <div className="contact-us" name="ContactUs" onClick={clickOnLetter} role="presentation">
                            Contact Us
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            {whichLayer === 'Work' ? (
                <div className="kwazi-work section four" id="modal-container">
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
                <div className="about-kwazi section four" id="modal-container">
                    <div className="section-inner modal-background">
                        <AboutKwazi {...data} hideEvent={hideLayer} />
                        <div className="contact-us" name="ContactUs" onClick={clickOnLetter} role="presentation">
                            Contact Us
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            {whichLayer === 'Zenith' ? (
                <div className="zenith section four" id="modal-container">
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
                <div className="i-am-board section four" id="modal-container">
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
