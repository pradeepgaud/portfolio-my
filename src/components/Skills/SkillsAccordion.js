import React, { useState } from 'react';

const skillsData = [
    { id: 1, title: 'Frontend Development', content: 'HTML, CSS, JavaScript, React, Redux, Tailwind CSS' },
    { id: 2, title: 'Backend Development', content: 'Node.js, Express.js, MongoDB, REST API' },
    { id: 3, title: 'Version Control & Tools', content: 'Git, GitHub' },
    { id: 4, title: 'Deployment Skills', content: 'Vercel, Netlify, Render, Railway, MongoDB Atlas' },
    { id: 5, title: 'Soft Skills', content: 'Teamwork, Communication, Problem Solving' }
];

function SkillsAccordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    return (
        <div
            className="tp-service-area section-padding"
            style={{
                padding: '40px 20px',
                width: '90vw',
                maxWidth: '1000px',
                margin: '0 auto'
            }}
        >
            <div className="container">
                <div className="tp-section-title text-center">
                    <span
                        style={{
                            color: '#fb923c',
                            fontSize: '16px',
                            fontWeight: '500'
                        }}
                    >
                        Check Skills
                    </span>
                    <h2

                    >
                        My Skills
                    </h2>
                    <p>
                        Here are some of the skills I have worked with
                    </p>
                </div>
            </div>

            {skillsData.map((item) => (
                <div
                    key={item.id}
                    style={{
                        borderBottom: '1px solid #ffffff',
                        marginBottom: '0'
                    }}
                >
                    <div
                        onClick={() => toggleAccordion(item.id)}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '18px 16px',
                            cursor: 'pointer',
                            fontSize: '22px',
                            fontWeight: '400',
                            width: '100%',
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#ffffff'
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '22px',
                                fontWeight: '400',
                                color: '#ffffff',
                                margin: '0',
                                padding: '0'
                            }}
                        >
                            {item.title}
                        </h3>
                        <span
                            style={{
                                fontSize: '22px',
                                fontWeight: '400',
                                color: '#ffffff',
                                lineHeight: '1',
                                userSelect: 'none'
                            }}
                        >
                            {activeIndex === item.id ? '-' : '+'}
                        </span>
                    </div>
                    {activeIndex === item.id && (
                        <div
                            style={{
                                paddingBottom: '10px',
                                paddingLeft: '16px',
                                paddingRight: '16px',
                                color: '#d1d5db',
                                fontSize: '16px',
                                fontWeight: '300',
                                lineHeight: '1.5'
                            }}
                        >
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default SkillsAccordion;
