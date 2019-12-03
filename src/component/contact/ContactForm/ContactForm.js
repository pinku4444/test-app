import React,{useState} from 'react';
import './ContactForm.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';



const ContactForm = () => {
    const contactPersonName = [
        {
            value: '',
            label: '',
        },
        {
            value: 'Pinku',
            label: 'Pinku',
        },
        {
            value: 'Ashish',
            label: 'Ashish',
        },
        {
            value: 'Ankur',
            label: 'Ankur',
        },
    ];
   // const classes = useStyles();
    const [personName, setPersonName] = React.useState('');

    const handleChange = event => {
        setPersonName(event.target.value);
    };

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Paper>
                        <div className="form-text">
                            <p>My Name is <TextField id="standard-basic" className="all-form" />,and</p>
                            <p>I'd like to contact <TextField
                                id="standard-select-currency"
                                select
                                value={personName}
                                onChange={handleChange}
                                className="select-person all-form"
                                margin="normal"
                            >
                                {contactPersonName.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>,with the below message</p>
                            <p>please contact me by phone  <TextField id="standard-basic" className="all-form" /></p>
                            <p>Or by email <TextField id="standard-basic" className="all-form"/>at your earliest.</p>
                            <TextareaAutosize className="message all-form" aria-label="minimum height" rows={10} placeholder="Write a Message ....." />
                            <Grid container>
                                <Grid item xs={4}>

                                </Grid>
                                <Grid item xs={4}>
                                    <Button className="submit-button" variant="contained" color="primary">
                                        Submit
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>

                                </Grid>

                            </Grid>

                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactForm;