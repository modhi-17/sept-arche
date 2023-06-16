import React from 'react';
import Contact from '../../components/public/Contact';
import NavigationBar from '../../components/public/NavigationBar';
import Footer from '../../components/public/Footer';
import '../public/ContactPage';


const ContactPage = () => {
    return (
        <div className='Contact'>
            <NavigationBar/>
            <Contact />
            <Footer/>
        </div>
    );
};

export default ContactPage;