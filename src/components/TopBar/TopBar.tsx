import React from 'react';
import clsx from 'clsx';
import {
    Toolbar,
    Hidden,
    List,
    ListItem,
    IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './useStyles';
import Image from '../Image/Image';
import DarkModeToggler from '../DarkModeToggler/DarkModeToggler';
import { PagesProps } from '../../interfaces/Props'
import LightLogo from '../../Images/lightMode.png';
import DarkLogo from '../../Images/darkMode.png';

interface Props {
    className?: string;
    onSidebarOpen: Function,
    pages: PagesProps;
    themeMode: string;
    themeToggler: Function;
};

const Topbar = ({ themeMode, themeToggler, onSidebarOpen, pages, className, ...rest }: Props): JSX.Element => {
    const classes = useStyles();

    return (
        <Toolbar disableGutters className={classes.toolbar} {...rest}>
            <div className={classes.logoContainer}>
                <a href="/" title="thefront">
                    <Image
                        className={classes.logoImage}
                        src={themeMode === 'light' ? LightLogo  : DarkLogo }
                        alt="Brian Ford"
                        lazy={false}
                    />
                </a>
            </div>
            <div className={classes.flexGrow} />
            <Hidden smDown>
                <List disablePadding className={classes.navigationContainer}>
                    
                    <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
                        <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
                    </ListItem>
                </List>
            </Hidden>
            <Hidden mdUp>
                <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
                <IconButton
                    className={classes.iconButton}
                    onClick={() => onSidebarOpen()}
                    aria-label="Menu"
                >
                    <MenuIcon />
                </IconButton>
            </Hidden>
        </Toolbar>
    );
};

export default Topbar;
