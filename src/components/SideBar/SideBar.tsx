import React from 'react';
import clsx from 'clsx';
import { Drawer } from '@material-ui/core';
import { PagesProps } from '../../interfaces/Props'
import SidebarNav from './SideBarNav/SideBarNav';
import useStyles from './useStyles'

interface Props {
    className?: string;
    onClose: Function;
    open: boolean;
    variant: 'permanent' | 'persistent' | 'temporary' | undefined;
    pages: PagesProps;
};

const Sidebar = ({ pages, open, variant, onClose, className, ...rest }: Props): JSX.Element => {
    const classes = useStyles();

    return (
        <Drawer
            anchor="left"
            classes={{ paper: classes.drawer }}
            onClose={() => onClose()}
            open={open}
            variant={variant}
        >
            <div {...rest} className={clsx(classes.root, className)}>
                <SidebarNav className={classes.nav} pages={pages} onClose={onClose} />
            </div>
        </Drawer>
    );
};

export default Sidebar;