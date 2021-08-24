import React from 'react';
import clsx from 'clsx';
import { IconButton, Grid, List, ListItem } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './useStyles';
import { PagesProps } from '../../interfaces/Props';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
                            <ListItem disableGutters>
                                <IconButton className={classes.socialIcon}>
                                    <a className={classes.a} href="https://www.github.com/bf2344">
                                    <GitHubIcon className={classes.icon} />
                                    </a>
                                </IconButton>
                                <IconButton className={classes.socialIcon}>
                                    <a className={classes.a} href="https://www.linkedin.com/in/bf2344">
                                    <LinkedInIcon className={classes.icon} />
                                    </a>
                                </IconButton>
                                <IconButton className={classes.socialIcon}>
                                <a className={classes.a} href="https://www.twitter.com">
                                    <TwitterIcon className={classes.icon} />
                                    </a>
                                </IconButton>
                                <IconButton className={classes.socialIcon}>
                                    <FileCopyIcon className={classes.icon} />
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

