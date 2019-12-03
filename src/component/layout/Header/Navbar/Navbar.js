import React from 'react';
import Typography from '@material-ui/core/Typography';
import './navbar.scss';
const Navbar = () => {
    return (
        <div className="navbar">
            <Typography variant="subtitle2" component="subtitle2" display="inline" className="navbar-text">
                Hospitality
            </Typography>
            <Typography variant="subtitle2" component="subtitle2" display="inline" className="navbar-text">
                Development 
            </Typography>
            <Typography variant="subtitle2" component="subtitle2" display="inline" className="navbar-text">
                Design
            </Typography>
            <Typography variant="subtitle2" component="subtitle2" display="inline" className="navbar-text">
                Construction
            </Typography>
        </div>
    );
};

export default Navbar;