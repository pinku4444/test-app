import React from 'react';
import Grid from '@material-ui/core/Grid';
import './SubHeader';
import Links from './Links';

const SubHeader = () => {
    return (
        <div className="subheader">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={2}>
                </Grid>
                <Grid item md={10} sm={12} md={10}>
                    <Links />
                </Grid>
            </Grid>
        </div>
    );
};

export default SubHeader;