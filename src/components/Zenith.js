import React from 'react';

function Zenith({ zenith }) {
    return (
        <div>
            {zenith !== undefined && (
                <div className="container">
                    <div className="zenith-section">
                        <h3>{zenith.title}</h3>
                        <p>{zenith.description}</p>
                        <img src={require(`../static/images/${zenith.slug}.png`)} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Zenith;
