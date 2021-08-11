import React from 'react';
import clsx from 'clsx';
import useStyles from './useStyles';
import Section from '../Section/Section';
import { makeStyles } from '@material-ui/core/styles';
import { HeroBackgroundProps } from '../../interfaces/Props';


const HeroBackground = ({
    children,
    backgroundSize = 'cover',
    backgroundImage,
    backgroundPosition = 'center',
    className,
    ...rest
}: HeroBackgroundProps): JSX.Element => {
    const classes = useStyles();

    const useBackground = makeStyles(() => ({
        backgroundImage: {
            backgroundImage: `url(${backgroundImage})`,
        },
        backgroundSize: {
            backgroundSize: backgroundSize,
        },
        backgroundPosition: {
            backgroundPosition: backgroundPosition,
        },
    }));
    const backgroundClasses = useBackground();

    return (
        <div
            className={clsx(
                'hero-simple-background',
                classes.root,
                className,
                backgroundClasses.backgroundImage,
                backgroundClasses.backgroundSize,
                backgroundClasses.backgroundPosition,
            )}
            {...rest}
        >
            <Section className="hero-simple-background__section">{children}</Section>
        </div>
    );
};

export default HeroBackground;
