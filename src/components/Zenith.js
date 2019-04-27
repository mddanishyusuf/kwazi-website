import React from 'react';

function Zenith({ zenith, hideEvent }) {
    function hideBox() {
        hideEvent();
    }
    return (
        <div>
            {zenith !== undefined && (
                <div className="container modal">
                    <div className="page-title-head">
                        <div className="right">
                            <span className="cl">Z</span>
                            <span className="sl">ENITH</span>
                        </div>
                        <div className="close-layer" onClick={hideBox} role="presentation">
                            X
                        </div>
                    </div>
                    <div className="page-content">
                        <h3 className="zenith-title">{zenith.title}</h3>
                        <div className="zenith-section">
                            <p>{zenith.description}</p>
                            <img src={require(`../static/images/${zenith.slug}.png`)} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Zenith;
