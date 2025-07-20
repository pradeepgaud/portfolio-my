import React, { useState } from 'react';
import Projects from '../../api/project';

const ProjectSection = (props) => {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({});
    const [number, setCount] = useState(3);
    const [buttonActive, setButtonState] = useState(false);

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item);
    };

    function handleClose() {
        setOpen(false);
    }

    return (
        <section className="tp-project-section section-padding" style={{ backgroundColor: '#000', color: '#fff', padding: '60px 0' }}>
            <div className="container">
                <div className="tp-section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span style={{ color: '#fb923c', fontWeight: '500' }}>Projects</span>
                    <h2 style={{ fontSize: '36px', fontWeight: '700', margin: '10px 0' }}>My Latest Project</h2>
                </div>
                <div className="tp-project-wrap">
                    <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {Projects.slice(0, number).map((project, pro) => (
                            <div className="col col-xl-4 col-lg-6 col-sm-12 col-12" key={pro} style={{ padding: '15px', maxWidth: '360px' }}>
                                <div className="tp-project-item" style={{ backgroundColor: '#111', padding: '15px', borderRadius: '5px', border: '1px solid #333' }}>
                                    <div className="tp-project-img" onClick={() => handleClickOpen(project)} style={{ cursor: 'pointer', marginBottom: '15px' }}>
                                        <img src={project.pImg} alt="" style={{ width: '100%', borderRadius: '5px' }} />
                                    </div>
                                    <div className="tp-project-content" style={{ textAlign: 'center' }}>
                                        <span style={{ color: '#fb923c', fontSize: '14px', fontWeight: '500' }}>{project.subTitle}</span>
                                        <h2 onClick={() => handleClickOpen(project)} style={{ color: '#fff', fontSize: '18px', fontWeight: '600', margin: '10px 0', cursor: 'pointer' }}>
                                            {project.title}
                                        </h2>
                                        {/* Live Button */}
                                        <a
                                            href={project.liveLink ? project.liveLink : '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-block',
                                                padding: '8px 16px',
                                                backgroundColor: '#fb923c',
                                                color: '#fff',
                                                textDecoration: 'none',
                                                borderRadius: '4px',
                                                marginTop: '10px',
                                                fontSize: '14px',
                                                fontWeight: '500'
                                            }}
                                        >
                                            Live Preview
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={`project-btn ${buttonActive ? "d-none" : ""}`} style={{ textAlign: 'center', marginTop: '30px' }}>
                        <span onClick={() => setButtonState(!buttonActive)}>
                            <button
                                className="theme-btn"
                                onClick={() => setCount(number + number)}
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: '#fb923c',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    fontWeight: '600',
                                    cursor: 'pointer'
                                }}
                            >
                                View all work
                            </button>
                        </span>
                    </div>
                </div>
            </div>

            <div className="visible-rotate-text" style={{ position: 'absolute', top: '0', right: '-80px', transform: 'rotate(90deg)', color: '#fff', fontSize: '24px' }}>
                <h1>My Projects</h1>
            </div>
        </section>
    );
};

export default ProjectSection;
