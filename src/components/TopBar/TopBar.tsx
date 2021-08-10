import React, { useState } from 'react';
import clsx from 'clsx';
import {
    Toolbar,
    Hidden,
    List,
    ListItem,
    ListItemIcon,
    Popover,
    Typography,
    IconButton,
    Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './useStyles';
import Image from '../Image/Image';
import DarkModeToggler from '../DarkModeToggler/DarkModeToggler';

interface Props {
    className?: string;
    onSidebarOpen: Function,
    pages: PagesProps;
    themeMode: string;
    themeToggler: Function;
};

const Topbar = ({ themeMode, themeToggler, onSidebarOpen, pages, className, ...rest }: Props): JSX.Element => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<any>(null);
    const [openedPopoverId, setOpenedPopoverId] = useState<string | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>, popoverId: string | null): void => {
        setAnchorEl(event.target);
        setOpenedPopoverId(popoverId);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
        setOpenedPopoverId(null);
    };

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
                        variant="body1"
                        component={'a'}
                        href={page.href}
                        className={clsx(classes.navLink, 'submenu-item')}
                        color="textSecondary"
                        onClick={handleClose}
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
                </div>
                <div className={classes.menuItem}>
                    <MenuGroup item={company} />
                    <MenuGroup item={contact} />
                </div>
                <div className={classes.menuItem}>
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
                </div>
                <div className={classes.menuItem}>
                    <MenuGroup item={signup} />
                    <MenuGroup item={signin} />
                </div>
                <div className={classes.menuItem}>
                    <MenuGroup item={password} />
                    <MenuGroup item={error} />
                </div>
            </div>
        );
    };

    const renderPages = (id: string): JSX.Element | null => {
        if (id === 'landing-pages') {
            return <LandingPages />;
        }
        if (id === 'supported-pages') {
            return <SupportedPages />;
        }
        if (id === 'account') {
            return <AccountPages />;
        }
        return null;
    };

    return (
        <Toolbar disableGutters className={classes.toolbar} {...rest}>
            <div className={classes.logoContainer}>
                <a href="/" title="thefront">
                    <Image
                        className={classes.logoImage}
                        src={themeMode === 'light' ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg' : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'}
                        alt="thefront"
                        lazy={false}
                    />
                </a>
            </div>
            <div className={classes.flexGrow} />
            <Hidden smDown>
                <List disablePadding className={classes.navigationContainer}>
                    {[landings, supportedPages, account].map((page, i) => (
                        <div key={page.id}>
                            <ListItem
                                aria-describedby={page.id}
                                onClick={e => handleClick(e, page.id)}
                                className={clsx(
                                    classes.listItem,
                                    openedPopoverId === page.id ? classes.listItemActive : '',
                                )}
                            >
                                <Typography
                                    variant="body1"
                                    color="textPrimary"
                                    className={clsx(classes.listItemText, 'menu-item')}
                                >
                                    {page.title}
                                </Typography>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <ExpandMoreIcon
                                        className={
                                            openedPopoverId === page.id ? classes.expandOpen : ''
                                        }
                                        fontSize="small"
                                    />
                                </ListItemIcon>
                            </ListItem>
                            <Popover
                                elevation={1}
                                id={page.id}
                                open={openedPopoverId === page.id}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                classes={{ paper: classes.popover }}
                            >
                                <div>{renderPages(page.id)}</div>
                            </Popover>
                        </div>
                    ))}
                    <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
                        <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
                    </ListItem>
                    <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
                        <Button
                            variant="outlined"
                            component="a"
                            href="/documentation"
                        >
                            Documentation
                        </Button>
                    </ListItem>
                    <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
                        <Button
                            variant="contained"
                            color="primary"
                            component="a"
                            target="blank"
                            href="https://material-ui.com/store/items/the-front-landing-page/"
                            className={classes.listItemButton}
                        >
                            Buy Now
                        </Button>
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
