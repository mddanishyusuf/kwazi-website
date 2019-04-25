import React from 'react';

function Work({ work }) {
    return (
        <div>
            {work !== undefined && (
                <div className="container">
                    <div className="page-section">
                        <h3>{work.title}</h3>
                        <p>{work.description}</p>
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
            )}
        </div>
    );
}

export default Work;
