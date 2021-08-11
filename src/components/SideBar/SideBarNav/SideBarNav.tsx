import React from 'react';
import clsx from 'clsx';
import { List, ListItem, Typography, Button } from '@material-ui/core';
import { PagesProps, MenuGroupProps } from '../../../interfaces/Props'
import useStyles from './useStyles'

interface Props {
    className?: string;
    onClose: Function;
    pages: PagesProps;
};

const SidebarNav = ({ pages, onClose, className, ...rest }: Props): JSX.Element => {
    const classes = useStyles();

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
