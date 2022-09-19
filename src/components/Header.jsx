import React from 'react';
import Navbar from './Navbar';
import School from './School';
import Slider from './Slider';
import Hero from './Hero';
import Notice from './Notice';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from './Footer';


AOS.init();


const Header = () => {
    return (
        <div >  
                <School />
                <Navbar />
                <Slider/>
                <Hero/>
                <Notice/>
                <Contact/>
                <Footer/>
        </div>
    );
};

export default Header;