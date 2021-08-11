import React from 'react';
import useStyles from './useStyles'
import { Divider } from '@material-ui/core';
import Section from '../Section/Section';
import Hero from '../Hero/Hero';
import TechUsed from '../TechUsed/TechUsed';
import Portfolio from '../Portfolio/Portfolio'
import TattooArtPic from '../../Images/tattooArt.jpg';
import MakeOrMiss from '../../Images/MakeOrMiss.jpg';
import StudentProfiles from '../../Images/studentProfiles.jpg';
import ReactWeather from '../../Images/reactweather.jpg';
import WebDevelopment from '../WebDevelopment/WebDevelopment'

const portfolioData = [
    {
        cover: TattooArtPic,
        title: 'TATTOO ART',
        subtitle: 'Tattoo Contest Website',
    },
    {
        cover: MakeOrMiss,
        title: 'MAKE OR MISS',
        subtitle: 'React/D3 Visualization',
    },
    {
        cover: StudentProfiles,
        title: 'HATCHWAYS FRONT END',
        subtitle: 'React Front End Assessment',
    },
    {
        cover: ReactWeather,
        title: 'REACT WEATHER DASHBOARD',
        subtitle: 'Using OpenWeatherMap',
    },
];


const Main = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <Hero data-aos="fade-up" className={classes.hero} />
            <Divider />
            <TechUsed />
            <Section>
                <WebDevelopment />
            </Section>
            <Divider />
            <Section>
                <Portfolio data={portfolioData} />
            </Section>
            <Divider />
        </>
    );
};

export default Main;
