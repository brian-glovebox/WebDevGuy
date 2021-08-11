import React from 'react';
import clsx from 'clsx';
import { List, ListItem, Button } from '@material-ui/core';
import { PagesProps } from '../../../interfaces/Props'
import useStyles from './useStyles'

interface Props {
    className?: string;
    onClose: Function;
    pages: PagesProps;
};

const SidebarNav = ({ pages, onClose, className, ...rest }: Props): JSX.Element => {
    const classes = useStyles();

    return (
        <List {...rest} className={clsx(classes.root, className)}>
            <ListItem className={classes.listItem}>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    component="a"
                    target="blank"
                    href="https://www.linkedin.com/in/bf2344"
                >
                    HIRE ME
                </Button>
            </ListItem>
        </List>
    );
};

export default SidebarNav;
