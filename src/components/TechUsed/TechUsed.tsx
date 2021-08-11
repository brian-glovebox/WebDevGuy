import React from 'react';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';
import Image from '../Image/Image';
import useStyles from './useStyles';
import ReactLogo from '../../Images/React-icon.svg';
import D3Logo from '../../Images/d3js-icon.svg';
import Node from '../../Images/Node.js_logo.svg'
import TypeScript from '../../Images/Typescript_logo_2020.svg';
import MongoDB from '../../Images/mongodb-ar21.svg';
import MaterialUILogo from '../../Images/material-ui.svg'
import { ViewComponentProps } from '../../interfaces/Props';

const techSpecial = [
    {
        name: 'React',
        logo: ReactLogo,
    },
    {
        name: 'Typescript',
        logo: TypeScript,
    },
    {
        name: 'Node',
        logo: Node,
    },
    {
        name: 'MongoDB',
        logo: MongoDB,
    },
    {
        name: 'D3',
        logo: D3Logo,
    },
    {
        name: 'Material UI',
        logo: MaterialUILogo,
    },
];

const TechUsed = ({ data, className, ...rest }: ViewComponentProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
            <div className={classes.copy}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                            align="center"
                            className={classes.fontWeight700}
                        >
                            Tech that I use:
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justifyContent="space-evenly" spacing={6}>
                            {techSpecial.map((tech: any, index: number) => (
                                <Grid item xs={6} sm={2} key={index}>
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        className={classes.logoImg}
                                        lazy={false}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default TechUsed;


