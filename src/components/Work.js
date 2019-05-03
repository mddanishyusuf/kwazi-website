import React, { useState } from 'react';

function Work({ work, hideEvent }) {
    function hideBox() {
        hideEvent();
    }

    const [activeProject, setActiveProject] = useState(null);

    const showProject = (details, e) => {
        e.preventDefault();
        setActiveProject(details);
    };
    return (
        <div>
            {work !== undefined && (
                <div className="container modal">
                    <div className="page-title-head">
                        <div className="right">
                            <span className="cl">W</span>
                            <span className="sl">ork</span>
                        </div>
                        <div className="close-layer" onClick={hideBox} role="presentation">
                            X
                        </div>
                    </div>
                    <div className="page-content">
                        <div className="page-section work-page-section">
                            <h3>{work.title}</h3>
                            <p>{work.description}</p>
                            <br />
                            <br />
                            <div className="work-section">
                                {work.projects.map((item, key) => (
                                    <div
                                        className="work-card"
                                        key={key}
                                        onClick={showProject.bind(this, item)}
                                        role="presentation"
                                    >
                                        <div className="thumbnail" id="cf">
                                            <img
                                                className="bottom"
                                                src={require(`../static/images/projects/${item.imageOnHover}`)}
                                                alt={item.name}
                                            />
                                            <img
                                                className="top"
                                                src={require(`../static/images/projects/${item.image}`)}
                                                alt={item.name}
                                            />
                                        </div>
                                        <div className="title">{item.name}</div>
                                        <div className="type">{item.type}</div>
                                    </div>
                                ))}
                            </div>
                            {activeProject !== null && (
                                <div className="project-info-container">
                                    <div className="project-details">
                                        <div className="details-inner">
                                            <div className="details-header">
                                                <img src={require(`../static/images/projects/marzano.jpg`)} />
                                                <div className="content">
                                                    <h3>Marzano</h3>
                                                    <p>
                                                        We work to fulfill and not simply fill. That often reflects in
                                                        our work and the practices we follow. Each of clients is our
                                                        priority, none more or less than the other. We work with
                                                        businesses that truly believe in their offerings and their value
                                                        to the customers. Steering clear of gibberish, we like creating
                                                        immersive and well-thought brand experiences, that positively
                                                        impacts our clients lives and subsequently their clients’
                                                    </p>
                                                    z
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Work;
