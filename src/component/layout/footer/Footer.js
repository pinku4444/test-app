import React from 'react';
import './Footer.scss';
import Grid from '@material-ui/core/Grid';
import CustomLink from '../SubHeader/Links/CustomLink';

const Footer = () => {
    return (
        <div className="footer">
            <Grid container>
                <Grid item xs={12} sm={12} md={3}></Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <div className="links-wrapper">
                        <CustomLink linkName="HOME" link="home" color="white" />
                        <CustomLink linkName="OUR COMPANIES" link="company" color="white" />
                        <CustomLink linkName="PORTIFILO" link="portifilo" color="white" />
                        <CustomLink linkName="CAREERS" link="careers" color="white" />
                        <CustomLink linkName="NEWS/EVENTS" link="news" color="white" />
                        <CustomLink linkName="CONTACT" link="contact" color="white" />
                    </div>
                </Grid>

            </Grid>
        </div>
    );
};

export default Footer;