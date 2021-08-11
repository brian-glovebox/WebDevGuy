import React from 'react';
import { Button, Typography } from '@material-ui/core';
import SectionHeader from '../SectionHeader/SectionHeader';
import Section from '../Section/Section';
import HeroBackground from '../HeroBackground/HeroBackground';
import { ViewComponentProps } from '../../interfaces/Props';
import HeroBG from '../../Images/heroBG.svg';

const Hero = ({ className, executeScroll, ...rest }: ViewComponentProps): JSX.Element => (
    <div className={className} {...rest}>
        <HeroBackground backgroundImage={HeroBG}>
            <Section narrow>
                <>
                    <SectionHeader
                        title={
                            <span>
                                Brian Ford{' '}<br/>
                                <Typography color="secondary" variant="inherit" component="span">Full-Stack Web Developer</Typography>
                            </span>
                        }
                        titleVariant="h3"
                        subtitle=""
                        ctaGroup={[
                            <Button color="primary" variant="contained" size="large">
                                See My Work
                            </Button>,
                            <Button color="secondary" variant="outlined" size="large">
                                Contact Me
                            </Button>,
                        ]}
                        disableGutter
                    />
                    <Typography
                        variant="overline"
                        align="center"
                        component="p"
                        color="primary"
                    >
                        Open For Work
                    </Typography>
                </>
            </Section>
        </HeroBackground>
    </div>
);

export default Hero;