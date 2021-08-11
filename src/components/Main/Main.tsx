import React from 'react';
import useStyles from './useStyles'
import { Divider } from '@material-ui/core';
import Section from '../Section/Section';
import Hero from '../Hero/Hero';
import TechUsed from '../TechUsed/TechUsed'


const Main = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <Hero data-aos="fade-up" className={classes.hero} />
            <Divider />
            <TechUsed />
            <Divider />
        </>
    );
};

export default Main;
