import React, { useState } from 'react';

function Work({ work, hideEvent }) {
    function hideBox() {
        hideEvent();
    }

    const [activeProject, setActiveProject] = useState(null);
    const [viewImage, setViewImage] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(null);

    const showProject = (details, e) => {
        e.preventDefault();
        setActiveProject(details);
    };

    function hideProjectBox() {
        setActiveProject(null);
    }

    const viewThisImage = (imgObj, key, e) => {
        setActiveImageIndex(key);
        e.preventDefault();
        setViewImage(imgObj);
    };

    function closePopupImage() {
        setViewImage(null);
    }

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
                            <img src={require(`../static/images/close-icon.png`)} alt="close page" />
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
                            {viewImage !== null && (
                                <div className="overlay open">
                                    <div className="overlay-inner">
                                        <button className="close" onClick={closePopupImage}>
                                            × Close
                                        </button>
                                        <img
                                            src={require(`../static/images/projects/${viewImage.image}`)}
                                            alt={viewImage.name}
                                        />
                                        <ul className="carousal-pagination">
                                            {activeProject.images.map((obj, key) => (
                                                <li
                                                    onClick={viewThisImage.bind(this, obj, key)}
                                                    role="presentation"
                                                    key={key}
                                                    className={activeImageIndex === key && 'active'}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {activeProject !== null && (
                                <div className="project-info-container">
                                    <div className="project-details">
                                        <div className="details-inner">
                                            <div className="back-btn" onClick={hideProjectBox} role="presentation">
                                                Back
                                            </div>
                                            <div className="details-header">
                                                <img
                                                    src={require(`../static/images/projects/${activeProject.image}`)}
                                                    alt={activeProject.name}
                                                />
                                                <div className="content">
                                                    <h3>{activeProject.name}</h3>
                                                    <small>
                                                        <b>{activeProject.brandingTags}</b>
                                                    </small>
                                                    <p>{activeProject.story}</p>
                                                </div>
                                            </div>
                                            <div className="project-banner">
                                                <img
                                                    src={require(`../static/images/projects/marzano-banner.jpg`)}
                                                    alt="Project Banner"
                                                />
                                            </div>
                                            <div className="gallery">
                                                {activeProject.images.map((obj, key) => (
                                                    <div key={key}>
                                                        <div
                                                            className="item h3 v3"
                                                            onClick={viewThisImage.bind(this, obj, key)}
                                                            role="presentation"
                                                        >
                                                            <div
                                                                className="project-image-bg"
                                                                style={{
                                                                    backgroundImage: `url(${require(`../static/images/projects/${
                                                                        obj.image
                                                                    }`)})`,
                                                                }}
                                                            />
                                                            <div className="item__overlay">
                                                                <button>View →</button>
                                                            </div>
                                                        </div>
                                                        <br />
                                                    </div>
                                                ))}
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
