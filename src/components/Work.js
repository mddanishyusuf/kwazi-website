import React, { useState } from 'react';

function Work({ work, hideEvent }) {
    function hideBox() {
        hideEvent();
    }

    const [activeProject, setActiveProject] = useState(null);
    const [viewImage, setViewImage] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(null);
    const [openGallery, setOpenGallery] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

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

    function closePopupImage(e) {
        const elId = e.target.id;
        if (elId === 'imageOuter' || elId === 'closeBtn') {
            setViewImage(null);
        }
    }

    const handleClickPrev = () => {
        setPhotoIndex(photoIndex - 1);
    };

    const handleClickNext = () => {
        setPhotoIndex(photoIndex + 1);
    };

    const handleOpen = () => {
        setOpenGallery(true);
    };

    const handleClose = () => {
        setOpenGallery(false);
    };

    return (
        <div>
            {viewImage !== null && (
                <div className="overlay open" onClick={closePopupImage} id="imageOuter">
                    <div className="overlay-inner">
                        <button className="close" id="closeBtn" role="presentation" onClick={closePopupImage}>
                            × Close
                        </button>
                        {photoIndex > 0 && (
                            <div className="left">
                                {' '}
                                <span onClick={handleClickPrev}>
                                    <svg
                                        width="36px"
                                        height="36px"
                                        className="v1262d JUQOtc yz5P3b"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
                                    </svg>
                                </span>{' '}
                            </div>
                        )}
                        <div
                            className="gallery-image"
                            style={{ backgroundImage: `url(${activeProject.images[photoIndex].image})` }}
                        />

                        {photoIndex + 1 < activeProject.images.length && (
                            <div className="right">
                                {' '}
                                <span onClick={handleClickNext}>
                                    <svg
                                        width="36px"
                                        height="36px"
                                        className="v1262d JUQOtc yz5P3b"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                                    </svg>
                                </span>{' '}
                            </div>
                        )}

                        {/* <img src={viewImage.image} alt={viewImage.name} /> */}
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
                                            <img className="bottom" src={item.imageOnHover} alt={item.name} />
                                            <img className="top" src={item.image} alt={item.name} />
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
                                            <div className="back-btn" onClick={hideProjectBox} role="presentation">
                                                <img src={require(`../static/images/back-icon.png`)} alt="back" />
                                                {/* <span>Back</span> */}
                                            </div>
                                            <div className="details-header">
                                                <img src={activeProject.image} alt={activeProject.name} />
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
                                                                    backgroundImage: `url(${obj.image})`,
                                                                }}
                                                            />
                                                            <div className="item__overlay" />
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
