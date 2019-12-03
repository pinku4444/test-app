import React,{Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import "./CustomLink.scss";

const CustomLink = (props) => {
    const {linkName, link,color } = props;
    return (
        <Fragment>
            <NavLink style={{"color":`${color}`}} to={`/${link}`} activeClassName="active-link" className="link">
                {linkName}
            </NavLink>
        </Fragment>
    );
};

export default CustomLink;