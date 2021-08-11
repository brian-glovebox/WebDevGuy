import React from 'react';
import clsx from 'clsx';
import { IconButton, Grid, List, ListItem } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './useStyles'
import Image from '../Image/Image';
import { PagesProps } from '../../interfaces/Props'
import DarkModeLogo from '../../Images/darkMode.png'

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
                                            src={DarkModeLogo}
                                            alt="bf2344"
                                            lazy={false}
                                        />
                                    </a>
                                </div>
                            </ListItem>
                            <ListItem disableGutters>
                                <IconButton className={classes.socialIcon}>
                                    <GitHubIcon className={classes.icon} />
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

