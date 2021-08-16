import React, { useRef } from 'react';
import useStyles from './useStyles'
import { Divider } from '@material-ui/core';
import Section from '../Section/Section';
import Hero from '../Hero/Hero';
import TechUsed from '../TechUsed/TechUsed';
import Portfolio from '../Portfolio/Portfolio'
import TattooArtPic from '../../Images/tattooArt.jpg';
import MakeOrMiss from '../../Images/MakeOrMiss.jpg';
import StudentProfiles from '../../Images/studentProfiles.jpg';
import Choose from '../../Images/chooseyourown.jpg';
import WebDevelopment from '../WebDevelopment/WebDevelopment';
import ContactPage from '../ContactPage/ContactPage'

const portfolioData = [
    {
        cover: TattooArtPic,
        title: 'TATTOO ART',
        subtitle: 'Tattoo Contest Website',
        href: "http://52.53.212.9/"
    },
    {
        cover: MakeOrMiss,
        title: 'MAKE OR MISS',
        subtitle: 'React/D3 Visualization',
        href: "https://salty-coast-38970.herokuapp.com/"
    },
    {
        cover: StudentProfiles,
        title: 'HATCHWAYS FRONT END',
        subtitle: 'React Front End Assessment',
        href: "https://bf2344.github.io/StudentProfilesHatchways/"
    },
    {
        cover: Choose,
        title: 'REACT CHOOSE YOUR OWN ADVENTURE',
        subtitle: 'React App',
        href: 'https://peaceful-escarpment-83290.herokuapp.com/'
    },
];

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);


const Main = (): JSX.Element => {
    const classes = useStyles();
    const myRef = useRef(null);
    const executeScroll = () => scrollToRef(myRef);

    return (
        <>
            <Hero executeScroll={executeScroll} data-aos="fade-up" className={classes.hero} />
            <Divider />
            <TechUsed />
            <Section>
                <WebDevelopment />
            </Section>
            <Divider />
            <Section ref={myRef}>
                <Portfolio data={portfolioData} />
            </Section>
            <Divider />
            <ContactPage />
        </>
    );
};

export default Main;
