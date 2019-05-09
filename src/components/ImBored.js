import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function ImBored({ iMBored, hideEvent }) {
    const [activeProject, setActiveProject] = useState(null);

    function hideBox() {
        hideEvent();
    }

    const showProject = (details, e) => {
        e.preventDefault();
        setActiveProject(details);
    };

    function hideProjectBox() {
        setActiveProject(null);
    }
    return (
        <div>
            {iMBored !== undefined && (
                <div className="container modal">
                    <div className="page-title-head">
                        <div className="right">
                            <span className="cl">I</span>
                            <span className="sl">'M BORED</span>
                        </div>
                        <div className="close-layer" onClick={hideBox} role="presentation">
                            <img src={require(`../static/images/close-icon.png`)} alt="close page" />
                        </div>
                    </div>
                    <div className="page-content">
                        <div className="page-section i-am-bored-container">
                            <div className="i-am-bored-section">
                                {iMBored.list.map((item, key) => (
                                    <div className="bored-card" key={key}>
                                        <div className="thumbnail" onClick={showProject.bind(this, item)}>
                                            <img src={require(`../static/images/${item.slug}.png`)} alt={item.name} />
                                        </div>
                                        <div className="title">{item.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {activeProject !== null && (
                            <div className="project-info-container">
                                <div className="project-details">
                                    <div className="details-inner">
                                        <div className="back-btn" onClick={hideProjectBox} role="presentation">
                                            <img src={require(`../static/images/back-icon.png`)} alt="back" />
                                            <span>Back</span>
                                        </div>
                                        <div className="links-preview">
                                            <div className="embeded">
                                                <ReactPlayer url={activeProject.embededUrl} />
                                            </div>
                                            <h4>{activeProject.title}</h4>
                                            <p>{activeProject.details}</p>
                                        </div>
                                        <div
                                            className="sync-link"
                                            name="Work"
                                            onClick={hideProjectBox}
                                            role="presentation"
                                        >
                                            More Interesting Stuff Here
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImBored;
