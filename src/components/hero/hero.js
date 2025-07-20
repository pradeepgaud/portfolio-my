import React from "react";
// import { NavLink } from 'react-router-dom'
import himg from '../../images/slider/imgbg.png'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <section className="tp-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="tp-hero-section-text">
                            <div className="tp-hero-title">
                                <h2>Full Stack Developer</h2>
                            </div>
                            <div className="tp-hero-sub">
                                <p>Pradeep Gaud</p>
                            </div>
                            <div className="btns">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95} className="theme-btn">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <img src={himg} alt="" />
                </div>
            </div>
            <div className="social-link">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/people/Pintu-Gaur/pfbid02KSSDssFRFce2BEC8P7VwSMkgBrC5ZABK9GTZ61JhvZuNfCc4m9tZ5Czxa6t53go3l/" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/_gaur__18?igsh=MTRtbjhzNXM4N3pvMQ==" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </li>
                    {/* <li>
                        <a href="https://x.com/gaur25604?t=Mw_wZPXP_QQtNSfQnucZ9w&s=09" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </li> */}
                    <li>
                        <a
                            href="https://www.linkedin.com/in/pradeepgaud/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >linkedin
                            <i className="ti-linkedin"></i>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="visible-text">
                <h1>Developer</h1>
            </div>
        </section>
    )
}

export default Hero;