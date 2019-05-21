import React from 'react';

function AboutKwazi({ aboutUs, hideEvent, clickFromChild }) {
    function hideBox() {
        hideEvent();
    }

    function playMusic() {
        document.getElementById('linkAudio').play();
    }

    function viewWork(e) {
        clickFromChild(e);
    }

    return (
        <div>
            <audio controls id="linkAudio">
                <source src={require(`../static/kwazi-pronunciation.mp3`)} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            {aboutUs !== undefined && (
                <div className="container modal">
                    <div className="page-title-head">
                        <div className="right">
                            <span className="cl">A</span>
                            <span className="sl">BOUT US</span>
                        </div>
                        <div className="close-layer" onClick={hideBox} role="presentation">
                            <img src={require(`../static/images/close-icon.png`)} alt="close page" />
                        </div>
                    </div>
                    <div className="page-content">
                        <div className="about-us-section">
                            <h3>{aboutUs.title}</h3>
                            <div className="about-kwazi-word">
                                qua·​si | \ ˈkwä-zē{' '}
                                <span onClick={playMusic} role="presentation" className="kwazi-pron">
                                    🔊
                                </span>
                                <br />
                                <br />
                                <i>combining form:</i>
                                <br />
                                <span style={{ opacity: 0.5 }}>
                                    prefix: <b>Quasi-</b>
                                </span>
                                <br />
                                apparently but not really; seemingly
                                <br />
                                <span className="text-bold">
                                    Reflective of the quality to be something you yet aren’t.
                                </span>
                            </div>
                            <p>{aboutUs.description}</p>
                            <h3>{aboutUs.workWithUs.title}</h3>
                            <div className="work-with-us-section">
                                {aboutUs.workWithUs.values.map((item, key) => (
                                    <div className="value-card" key={key}>
                                        <div className="thumbnail">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="title">{item.title}</div>
                                    </div>
                                ))}
                            </div>
                            <h3>WHO'S WHO?</h3>
                            <div className="team-section">
                                {aboutUs.team.map((item, key) => (
                                    <div className={key === 1 ? 'team-card second-team-card' : 'team-card'} key={key}>
                                        <div className="thumbnail">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="content">
                                            <div className="name">{item.name}</div>
                                            <div className="position">{item.position}</div>
                                            <div className="about">{item.about}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="sync-link" name="Work" onClick={viewWork} role="presentation">
                                View Our Work
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AboutKwazi;
