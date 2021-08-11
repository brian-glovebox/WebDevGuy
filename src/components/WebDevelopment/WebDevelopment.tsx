import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import Image from '../Image/Image';
import SectionHeader from '../SectionHeader/SectionHeader';
import { ViewComponentProps } from '../../interfaces/Props';
import WebImage from '../../Images/progressive-app.svg';

const WebDevelopment = ({ data, className, ...rest }: ViewComponentProps): JSX.Element => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    return (
        <div className={className} {...rest}>
            <Grid container spacing={isMd ? 4 : 2}>
                <Grid item xs={12}>
                    <Grid container spacing={isMd ? 4 : 2}>
                        <Grid item xs={12} md={6}>
                            <SectionHeader
                                title="Exploring new technologies to further my education"
                                subtitle="My Mission is to stay up to date with the most popular frameworks and languages to be the most employer competitive I can be."
                                align="left"
                                label="Full Stack Development"
                                disableGutter
                                data-aos="fade-up"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} data-aos="fade-up">
                            <Image
                                src={WebImage}
                                alt="Integrations"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default WebDevelopment;
