import React, { Fragment } from 'react';
import About from '../../components/about/about';
import BackToTop from '../../components/backToTop/backToTop';
import ContactArea from '../../components/ContactArea';
import Hero from '../../components/hero/hero';
import Marquee from '../../components/marque/marque';
import Navbar from '../../components/Navbar/Navbar';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

// import Testimonial from '../../components/Testimonial/Testimonial';
import { Element } from 'react-scroll'
// import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
// import Faq from '../../components/FAQ/Faq';
// import Pricing from '../../components/Pricing';
import SkillsAccordion from '../../components/Skills/SkillsAccordion';


const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Element name='home'>
                <Hero />
            </Element>
            <Element name='about'>
                <About />
            </Element>

             <Element name='skills'>
               <SkillsAccordion />
            </Element>
            
            {/* <Element name='service'>
                <ServiceSection />
            </Element> */}
            <Marquee />
            <Element name='project'>
                <ProjectSection />
            </Element>

            {/* <Testimonial /> */}
            {/* <Element name='blog'> */}
                {/* <BlogSection /> */}
            {/* </Element> */}
            {/* <Pricing /> */}
            <Element name='contact'>
                <ContactArea />
            </Element>
          
            <Footer />
            <BackToTop />
        </Fragment>
    )
};
export default HomePage;