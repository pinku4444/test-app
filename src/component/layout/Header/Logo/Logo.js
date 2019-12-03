import React,{Fragment} from 'react';
import logo from '../../../../assests/images/logo.png'
import './logo.scss';


const Logo = () => {
    return (
        <Fragment>
            <img src={logo} alt="logo" className="logo" />
        </Fragment>
    );
};

export default Logo