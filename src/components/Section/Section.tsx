import React from 'react';
import clsx from 'clsx';
import useStyles from './useStyles';
import { SectionProps } from '../../interfaces/Props'

const Section = ({
    children,
    fullWidth,
    narrow,
    disablePadding,
    className,
    ...rest
}: SectionProps): JSX.Element => {
    const classes = useStyles();

    return (
        <section
            className={clsx(
                'section',
                classes.root,
                fullWidth ? classes.fullWidth : {},
                narrow ? classes.narrow : {},
                disablePadding ? classes.disablePadding : {},
                className,
            )}
            {...rest}
        >
            {children}
        </section>
    );
};

export default Section;
