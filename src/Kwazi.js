import React, { useEffect, useState } from 'react';
import axios from 'axios';

import WhoWeAre from './components/WhoWeAre';
import Work from './components/Work';
import AboutKwazi from './components/AboutKwazi';
import Zenith from './components/Zenith';
import ImBored from './components/ImBored';

import './app.scss';

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
        console.log('hi');
    }

    function hideLayer() {
        setWhichLayer(null);
    }

    return (
        <div className="container">
            <div className="who-we-are landing-section">
                <div className="landing-page">
                    <div className="kwazi-title">
                        <h2>
                            <span name="WhoWeAre" onClick={clickOnLetter} role="presentation">
                                K
                            </span>
                            <span name="Work" onClick={clickOnLetter} role="presentation">
                                W
                            </span>
                            <span name="AboutKwazi" onClick={clickOnLetter} role="presentation">
                                A
                            </span>
                            <span name="Zenith" onClick={clickOnLetter} role="presentation">
                                Z
                            </span>
                            <span name="ImBored" onClick={clickOnLetter} role="presentation">
                                I
                            </span>
                        </h2>
                        <div className="tag-line">branding & design humans</div>
                    </div>
                </div>
            </div>
            {whichLayer === 'WhoWeAre' ? (
                <div className="who-we-are section collapsed" onClick={hideLayer} role="presentation">
                    <div className="section-inner">
                        <WhoWeAre {...data} hideEvent={hideLayer} />
                    </div>
                </div>
            ) : (
                ''
            )}
            {whichLayer === 'Work' ? (
                <div className="kwazi-work section" onClick={hideLayer} role="presentation">
                    <div className="section-inner">
                        <Work {...data} hideEvent={hideLayer} />
                    </div>
                </div>
            ) : (
                ''
            )}
            {whichLayer === 'AboutKwazi' ? (
                <div className="about-kwazi section" role="presentation">
                    <div className="section-inner">
                        <AboutKwazi {...data} hideEvent={hideLayer} />
                    </div>
                </div>
            ) : (
                ''
            )}
            {whichLayer === 'Zenith' ? (
                <div className="zenith section" onClick={hideLayer} role="presentation">
                    <div className="section-inner">
                        <Zenith {...data} hideEvent={hideLayer} />
                    </div>
                </div>
            ) : (
                ''
            )}
            {whichLayer === 'ImBored' ? (
                <div className="i-am-board section" onClick={hideLayer} role="presentation">
                    <div className="section-inner">
                        <ImBored {...data} hideEvent={hideLayer} />
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default Kwazi;
