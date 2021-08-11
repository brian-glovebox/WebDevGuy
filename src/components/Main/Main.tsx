import React from 'react';
import useStyles from './useStyles'
import { Divider } from '@material-ui/core';
import Section from '../Section/Section';
import Hero from '../Hero/Hero';
import TechUsed from '../TechUsed/TechUsed';
import Portfolio from '../Portfolio/Portfolio'
import TattooArtPic from '../../Images/tattooArt.jpg';
import MakeOrMiss from '../../Images/MakeOrMiss.jpg'

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
        cover: 'https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg',
        title: 'HATCHWAYS FRONT END',
        subtitle: 'React Front End Assessment',
    },
    {
        cover: 'https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg',
        title: 'NIKE',
        subtitle: 'Just do it',
    },
];


const Main = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <Hero data-aos="fade-up" className={classes.hero} />
            <Divider />
            <TechUsed />
            <Divider />
            <Section>
                <Portfolio data={portfolioData} />
            </Section>
        </>
    );
};

export default Main;
