import React from 'react'
// import { Link } from 'react-router-dom'
// import Logo from '../../images/Untitled design (2).png'

const Footer = (props) => {
    return (
        <div className="tp-site-footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="navbar-header text-white">
                            P.G
                        </div>
                        {/* <div className="footer-image">
                            <Link className="logo" to="/"><img src={Logo} alt="" /></Link>
                        </div> */}
                    </div>
                    <div className="col-12">
                        <div className="link-widget">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100064373584968" target="_blank" rel="noopener noreferrer"><i className="ti-facebook"></i></a>
                                </li>
                                <li>
                                    <a
                                        href="https://x.com/gaur25604?t=Mw_wZPXP_QQtNSfQnucZ9w&s=09"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="ti-twitter-alt"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/pradeepgaud/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="ti-linkedin"></i>
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p className="text-gray-400 text-sm">
                                © 2025. All rights reserved by <span className="text-orange-400 font-bold">Pradeep Gaud</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;