import React from 'react';
import clsx from 'clsx';
import { Typography, IconButton, Grid, List, ListItem } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import useStyles from './useStyles'
import Image from '../Image/Image';
import { PagesProps, MenuGroupProps } from '../../interfaces/Props'

interface Props {
    className?: string;
    pages: PagesProps;
};

const Footer = ({ pages, className, ...rest }: Props): JSX.Element => {
    const classes = useStyles();

    return (
        <div {...rest} className={clsx(classes.root, className)}>
            <div className={classes.footerContainer}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={2}>
                        <List disablePadding>
                            <ListItem disableGutters className={classes.logoContainerItem}>
                                <div className={classes.logoContainer}>
                                    <a href="/" title="thefront">
                                        <Image
                                            className={classes.logoImage}
                                            src="https://assets.maccarianagency.com/the-front/logos/logo-negative.svg"
                                            alt="thefront"
                                            lazy={false}
                                        />
                                    </a>
                                </div>
                            </ListItem>
                            <ListItem disableGutters>
                                <IconButton className={classes.socialIcon}>
                                    <FacebookIcon className={classes.icon} />
                                </IconButton>
                                <IconButton className={classes.socialIcon}>
                                    <InstagramIcon className={classes.icon} />
                                </IconButton>
                                <IconButton className={classes.socialIcon}>
                                    <TwitterIcon className={classes.icon} />
                                </IconButton>
                                <IconButton className={classes.socialIcon}>
                                    <PinterestIcon className={classes.icon} />
                                </IconButton>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Footer;

