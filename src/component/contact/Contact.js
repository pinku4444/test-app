import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Contact.scss';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className="contact">
           <Typography variant="h5" component="h5" display="inline">
                Contact A & R GROUP
            </Typography> 
            <ContactForm />
        </div>
    );
};

export default Contact;