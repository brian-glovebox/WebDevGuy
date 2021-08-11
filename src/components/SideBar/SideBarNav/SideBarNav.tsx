import React from 'react';
import clsx from 'clsx';
import { List, ListItem, Typography, ListItemIcon, Divider, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { PagesProps, MenuGroupProps } from '../../../interfaces/Props'
import useStyles from './useStyles'

interface Props {
    className?: string;
    onClose: Function;
    pages: PagesProps;
};

const SidebarNav = ({ pages, onClose, className, ...rest }: Props): JSX.Element => {
    const classes = useStyles();

    const landings = pages.landings;
    const supportedPages = pages.pages;
    const account = pages.account;

    const MenuGroup = ({ item }: MenuGroupProps): JSX.Element => (
        <List disablePadding>
            <ListItem disableGutters>
                <Typography
                    variant="body2"
                    color="primary"
                    className={classes.menuGroupTitle}
                >
                    {item.groupTitle}
                </Typography>
            </ListItem>
            {item.pages.map((page, i) => (
                <ListItem disableGutters key={i} className={classes.menuGroupItem}>
                    <Typography
                        variant="body2"
                        component={'a'}
                        href={page.href}
                        className={clsx(classes.navLink, 'submenu-item')}
                        color="textPrimary"
                        onClick={() => onClose()}
                    >
                        {page.title}
                    </Typography>
                </ListItem>
            ))}
        </List>
    );

    const LandingPages = (): JSX.Element => {
        const { services, apps, web } = landings.children;
        return (
            <div className={classes.menu}>
                <div className={classes.menuItem}>
                    <MenuGroup item={services} />
                    <MenuGroup item={apps} />
                </div>
                <div className={classes.menuItem}>
                    <MenuGroup item={web} />
                </div>
            </div>
        );
    };

    const SupportedPages = (): JSX.Element => {
        const {
            career,
            helpCenter,
            company,
            contact,
            blog,
            portfolio,
        } = supportedPages.children;
        return (
            <div className={classes.menu}>
                <div className={classes.menuItem}>
                    <MenuGroup item={career} />
                    <MenuGroup item={helpCenter} />
                    <MenuGroup item={company} />
                </div>
                <div className={classes.menuItem}>
                    <MenuGroup item={contact} />
                    <MenuGroup item={blog} />
                    <MenuGroup item={portfolio} />
                </div>
            </div>
        );
    };

    const AccountPages = (): JSX.Element => {
        const { settings, signup, signin, password, error } = account.children;
        return (
            <div className={classes.menu}>
                <div className={classes.menuItem}>
                    <MenuGroup item={settings} />
                    <MenuGroup item={signup} />
                </div>
                <div className={classes.menuItem}>
                    <MenuGroup item={signin} />
                    <MenuGroup item={password} />
                    <MenuGroup item={error} />
                </div>
            </div>
        );
    };

    return (
        <List {...rest} className={clsx(classes.root, className)}>
            <ListItem className={classes.listItem}>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    component="a"
                    target="blank"
                    href="https://material-ui.com/store/items/the-front-landing-page/"
                >
                    HIRE ME
                </Button>
            </ListItem>
        </List>
    );
};

export default SidebarNav;
