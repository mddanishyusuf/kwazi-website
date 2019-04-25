import React from 'react';

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="kwazi-title">
                <h2>
                    <span onClick={clickOnK}>K</span>
                    <span>W</span>
                    <span>A</span>
                    <span>Z</span>
                    <span>I</span>
                </h2>
                <div className="tag-line">branding & design humans</div>
            </div>
        </div>
    );
}

export default LandingPage;
