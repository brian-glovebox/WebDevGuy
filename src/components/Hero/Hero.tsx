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
                                <Typography color="secondary" variant="inherit" component="span">Software Developer</Typography>
                            </span>
                        }
                        titleVariant="h3"
                        subtitle=""
                        ctaGroup={[
                            <Button href='https://www.github.com/bf2344' color="primary" variant="contained" size="large">
                                See My Work 
                            </Button>
                        ]}
                        disableGutter
                    />
                    <Typography
                        variant="overline"
                        align="center"
                        component="p"
                        color="primary"
                    >
                        Contact Me For Collaboration - bf@bford.dev
                    </Typography>
                </>
            </Section>
        </HeroBackground>
    </div>
);

export default Hero;