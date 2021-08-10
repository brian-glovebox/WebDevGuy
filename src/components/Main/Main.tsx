import React from 'react';
import useStyles from './useStyles'
import { Divider } from '@material-ui/core';
import Section from '../Section/Section';
import Hero from '../Hero/Hero';


const Main = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <Hero data-aos="fade-up" className={classes.hero} />

        </>
    );
};

export default Main;
