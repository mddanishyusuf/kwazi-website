import React, { useState } from 'react';
import { Player, ControlBar } from 'video-react';
import HeaderImage from '../static/images/who-we-are-header.png';

function WhoWeAre({ whoWeAre, hideEvent, clickFromChild }) {
    const [playBtnTrans, setPlayBtnTrans] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(true);

    function hideBox() {
        hideEvent();
    }

    function viewWork(e) {
        clickFromChild(e);
    }

    function playVideo() {
        setPlayBtnTrans(true);
        const video = document.getElementById('kwaziVideo');
        if (video.paused == true) {
            // Play the video
            video.play();
            setShowPlayButton(false);

            // Update the button text to 'Pause'
            // playButton.innerHTML = "Pause";
        } else {
            // Pause the video
            video.pause();
            setShowPlayButton(true);

            // Update the button text to 'Play'
            // playButton.innerHTML = "Play";
        }
        console.log('play video');
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
                        {/* <div className="header welcome-header-image" style={{ backgroundImage: `url(${HeaderImage})` }}>
                            <div className="header-text">WELCOME TO THE KWA:ZIVERSE</div>
                        </div> */}

                        <div className="banner">
                            <video
                                loop
                                id="kwaziVideo"
                                className="banner__video"
                                poster="https://www.realmilkpaint.com/wp-content/uploads/SoftWhite_Edited_2018.jpg"
                            >
                                <source
                                    src="https://res.cloudinary.com/kwazi/video/upload/v1558243098/Video/Kwazi_Banner_2_je6xmh.mp4"
                                    type="video/mp4"
                                />
                            </video>
                            <div id="video-controls" onClick={playVideo}>
                                {showPlayButton && (
                                    <div id="cf2" className="shadow">
                                        <img
                                            src={require(`../static/images/white-play-btn.png`)}
                                            role="presentation"
                                            alt="White Play Button"
                                        />
                                        <img
                                            src={require(`../static/images/dark-play-btn.png`)}
                                            className={playBtnTrans && 'transparent'}
                                            alt="Dark Play Button"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="page-section">
                            <h3>{whoWeAre.title}</h3>
                            <p className="p-container" dangerouslySetInnerHTML={{ __html: whoWeAre.description }} />
                            <h3>OUR BRANDING & DESIGN PRACTICE</h3>
                            <div className="practice-section">
                                {whoWeAre.practice.map((item, key) => (
                                    <div className="practice-card" key={key}>
                                        <div className="header">
                                            <div className="title">{item.name}</div>
                                            <div className="icon">
                                                <img src={item.image} alt={item.name} />
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
                                            <img src={item.image} alt={item.slug} />
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
                                            <img src={item.image} alt={item.slug} />
                                        </div>
                                        <div className="service-card-title">{item.name}</div>
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

export default WhoWeAre;
