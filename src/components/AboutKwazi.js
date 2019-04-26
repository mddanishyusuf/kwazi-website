import React from 'react';

function AboutKwazi({ aboutUs, hideEvent }) {
    function hideBox() {
        hideEvent();
    }

    return (
        <div>
            {aboutUs !== undefined && (
                <div className="container">
                    <div className="page-title-head">
                        <div className="right">
                            <span className="cl">A</span>
                            <span className="sl">BOUT US</span>
                        </div>
                        <div className="close-layer" onClick={hideBox} role="presentation">
                            X
                        </div>
                    </div>
                    <div className="page-content">
                        <div className="about-us-section">
                            <h3>{aboutUs.title}</h3>
                            <p>{aboutUs.description}</p>
                            <h3>{aboutUs.workWithUs.title}</h3>
                            <div className="work-with-us-section">
                                {aboutUs.workWithUs.values.map((item, key) => (
                                    <div className="value-card" key={key}>
                                        <div className="thumbnail">
                                            <img src={require(`../static/images/${item.slug}.png`)} alt={item.name} />
                                        </div>
                                        <div className="title">{item.title}</div>
                                    </div>
                                ))}
                            </div>
                            <h3>WHO'S WHO?</h3>
                            <div className="team-section">
                                {aboutUs.team.map((item, key) => (
                                    <div className="team-card" key={key}>
                                        <div className="thumbnail">
                                            <img src={require(`../static/images/${item.slug}.png`)} alt={item.name} />
                                        </div>
                                        <div className="content">
                                            <div className="name">{item.name}</div>
                                            <div className="position">{item.position}</div>
                                            <div className="about">{item.about}</div>
                                        </div>
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

export default AboutKwazi;
