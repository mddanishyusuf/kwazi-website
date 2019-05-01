import React from 'react';

function Work({ work, hideEvent }) {
    function hideBox() {
        hideEvent();
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
                                    <div className="work-card" key={key}>
                                        <div className="thumbnail">
                                            <img src={require(`../static/images/${item.slug}.png`)} alt={item.name} />
                                        </div>
                                        <div className="title">{item.name}</div>
                                        <div className="type">{item.type}</div>
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

export default Work;
