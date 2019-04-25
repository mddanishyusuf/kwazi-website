import React from 'react';
import HeaderImage from '../static/images/who-we-are-header.png';

function WhoWeAre({ whoWeAre }) {
    return (
        <div>
            {whoWeAre !== undefined && (
                <div className="container">
                    <div className="header welcome-header-image" style={{ backgroundImage: `url(${HeaderImage})` }}>
                        <div className="header-text">WELCOME TO THE KWA:ZIVERSE</div>
                    </div>
                    <div className="page-section">
                        <h3>{whoWeAre.title}</h3>
                        <p>{whoWeAre.description}</p>
                        <h3>OUR BRANDING & DESIGN PRACTICE</h3>
                        <div className="practice-section">
                            {whoWeAre.practice.map((item, key) => (
                                <div className="practice-card" key={key}>
                                    <div className="header">
                                        <div className="title">{item.name}</div>
                                        <div className="icon">
                                            <img src={require(`../static/images/${item.name}.png`)} alt={item.name} />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h3>OUR SERVICES</h3>
                        <div className="services-section">
                            {whoWeAre.services.map((item, key) => (
                                <div className="services-card" key={key}>
                                    <div className="icon">
                                        <img src={require(`../static/images/${item.slug}.png`)} alt={item.slug} />
                                    </div>
                                    <div>{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WhoWeAre;
