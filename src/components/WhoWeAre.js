import React from 'react';
import HeaderImage from '../static/images/who-we-are-header.png';

function WhoWeAre({ whoWeAre, hideEvent }) {
    function hideBox() {
        hideEvent();
    }

    return (
        <div>
            {whoWeAre !== undefined && (
                <div className="container modal">
                    <div className="page-title-head">
                        <div className="right">
                            <span className="cl">K</span>
                            <span className="sl">WA:ZI VERSE</span>
                        </div>
                        <div className="close-layer" onClick={hideBox} role="presentation">
                            <img src={require(`../static/images/close-icon.png`)} alt="close page" />
                        </div>
                    </div>
                    <div className="page-content">
                        <div className="header welcome-header-image" style={{ backgroundImage: `url(${HeaderImage})` }}>
                            <div className="header-text">WELCOME TO THE KWA:ZIVERSE</div>
                        </div>
                        <div className="page-section">
                            <h3>{whoWeAre.title}</h3>
                            <p className="p-container">{whoWeAre.description}</p>
                            <h3>OUR BRANDING & DESIGN PRACTICE</h3>
                            <div className="practice-section">
                                {whoWeAre.practice.map((item, key) => (
                                    <div className="practice-card" key={key}>
                                        <div className="header">
                                            <div className="title">{item.name}</div>
                                            <div className="icon">
                                                <img
                                                    src={require(`../static/images/${item.name}.png`)}
                                                    alt={item.name}
                                                />
                                            </div>
                                        </div>
                                        <div className="content">
                                            <p dangerouslySetInnerHTML={{ __html: item.description }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <br />
                            <br />
                            <h3>OUR SERVICES</h3>
                            <br />
                            <br />
                            <div className="services-section">
                                {whoWeAre.services.slice(0, 4).map((item, key) => (
                                    <div className="services-card" key={key}>
                                        <div className="icon">
                                            <img src={require(`../static/images/${item.slug}.png`)} alt={item.slug} />
                                        </div>
                                        <div className="service-card-title">{item.name}</div>
                                    </div>
                                ))}
                            </div>
                            <br />
                            <br />
                            <div className="services-section">
                                {whoWeAre.services.slice(4, 7).map((item, key) => (
                                    <div className="services-card" key={key}>
                                        <div className="icon">
                                            <img src={require(`../static/images/${item.slug}.png`)} alt={item.slug} />
                                        </div>
                                        <div className="service-card-title">{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WhoWeAre;
