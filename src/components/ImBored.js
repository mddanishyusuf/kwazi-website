import React from 'react';

function ImBored({ iMBored, hideEvent }) {
    function hideBox() {
        hideEvent();
    }
    return (
        <div>
            {iMBored !== undefined && (
                <div className="container">
                    <div className="page-title-head">
                        <div className="right">
                            <span className="cl">I</span>
                            <span className="sl">'M BORED</span>
                        </div>
                        <div className="close-layer" onClick={hideBox} role="presentation">
                            X
                        </div>
                    </div>
                    <div className="page-content">
                        <div className="page-section i-am-bored-container">
                            <h3>{iMBored.title}</h3>
                            <div className="i-am-bored-section">
                                {iMBored.list.map((item, key) => (
                                    <div className="bored-card" key={key}>
                                        <div className="thumbnail">
                                            <img src={require(`../static/images/${item.slug}.png`)} alt={item.name} />
                                        </div>
                                        <div className="title">{item.title}</div>
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

export default ImBored;
