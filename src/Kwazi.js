import React, { useEffect } from 'react';

import axios from 'axios';
import LandingPage from './components/LandingPage';
import './app.scss';

function Kwazi() {
    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/kwazidesign/kwazi-web-data/master/kwazi.json').then(res => {
            console.log(res.data);
        });
    }, []);

    return (
        <div className="container">
            <LandingPage />
        </div>
    );
}

export default Kwazi;
