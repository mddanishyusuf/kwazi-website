import React, { useEffect, useState } from 'react';
import axios from 'axios';

import WhoWeAre from './components/WhoWeAre';
import Work from './components/Work';
import AboutKwazi from './components/AboutKwazi';
import Zenith from './components/Zenith';

import './app.scss';

function Kwazi() {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchMyAPI() {
            const url = 'http://something';
            const config = {};
            const response = await axios.get(
                'https://raw.githubusercontent.com/kwazidesign/kwazi-web-data/master/kwazi.json'
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
        console.log('hi');
    }

    return (
        <div className="container">
            <div className="who-we-are section">
                <div className="landing-page">
                    <div className="kwazi-title">
                        <h2>
                            <span name="k" onClick={clickOnLetter} role="presentation">
                                K
                            </span>
                            <span name="w" onClick={clickOnLetter} role="presentation">
                                W
                            </span>
                            <span name="a" onClick={clickOnLetter} role="presentation">
                                A
                            </span>
                            <span name="z" onClick={clickOnLetter} role="presentation">
                                Z
                            </span>
                            <span name="i" onClick={clickOnLetter} role="presentation">
                                I
                            </span>
                        </h2>
                        <div className="tag-line">branding & design humans</div>
                    </div>
                </div>
            </div>
            <div className="who-we-are section">
                <WhoWeAre {...data} />
            </div>
            <div className="kwazi-work section">
                <Work {...data} />
            </div>
            <div className="about-kwazi section">
                <AboutKwazi {...data} />
            </div>
            <div className="zenith section">
                <Zenith {...data} />
            </div>
        </div>
    );
}

export default Kwazi;
