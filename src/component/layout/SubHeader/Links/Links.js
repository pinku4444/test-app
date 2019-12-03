import React from 'react';
import CustomLink from './CustomLink';
import './Links.scss';
import Logo from '../../Header/Logo';

const Links = () => {
    return (
        <div className="links">
            <div className="links-wrapper">
                <CustomLink linkName="HOME" link="home" color="#00003f" />
                <CustomLink linkName="OUR COMPANIES" link="company" color="#00003f" />
                <CustomLink linkName="PORTIFILO" link="portifilo" color="#00003f" />
            </div>
            <div className="header-logo">
                <Logo />
            </div>
            <div className="links-wrapper">
                <CustomLink linkName="CAREERS" link="careers" color="#00003f" />
                <CustomLink linkName="NEWS/EVENTS" link="news" color="#00003f" />
                <CustomLink linkName="CONTACT" link="contact" color="#00003f" />
            </div>
            
        </div>
    );
};

export default Links;