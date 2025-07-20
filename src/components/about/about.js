import React from 'react'
import aImg from '../../images/about/imgbg.png'

const About = (props) => {
    return (

        <section className="tf-about-section section-padding">
            <div className="container">
                <div className="tf-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-img">
                                <img src={aImg} alt="" />
                                <div className="tf-about-img-text">
                                    <div className="tf-about-icon">
                                        <h3>1</h3>
                                        <span>Years Exprience</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <h2></h2>
<p>
   Hi, I’m a passionate and dedicated <strong>Full Stack Developer</strong> with hands-on experience in both Frontend and Backend technologies. Currently, I’m gaining real-world industry experience through a 3-month internship at <strong>Digital Asia</strong>, where I’ve worked on multiple live projects and honed my skills in a professional environment.
</p>
<p>
My tech journey began with a year-long intensive training at <strong>Ducat Institute</strong>, where I built several projects and developed a strong foundation in web development. Since then, I’ve contributed to <strong>3–4 major projects</strong> during my internship and created <strong>4–5 functional applications</strong> during my coaching — all of which have helped me grow as a confident and capable developer.
</p> */}

                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-text">
                                <small>about Me</small>
                                <h2>Welcome to , Best Developer Services</h2>
                                <h5>Crafting Code, Creating Impact: My Developer Journey</h5>
                                <p> Hi, I’m a passionate Full Stack Developer with hands-on experience in both frontend and backend technologies. Currently, I’m sharpening my skills through a 3-month internship at Digital Asia, working on real-world projects in a professional environment. </p>


                               <p>My journey began with a year of intensive training at Ducat Institute, where I built multiple projects and gained a strong foundation in web development. Since then, I’ve contributed to several live projects during my internship and created dynamic applications during my training — shaping me into a confident and capable developer.</p>

                                <div className="tf-funfact">
                                    <div className="tf-funfact-item">
                                        <h3><span>10</span>+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>About Me</h1>
            </div>
        </section>
    )
}

export default About;