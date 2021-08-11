import React from 'react';
import clsx from 'clsx';
import { Typography, Button } from '@material-ui/core';
import Image from '../Image/Image';
import { ViewComponentProps } from '../../interfaces/Props';
import SectionHeader from '../SectionHeader/SectionHeader';
import useStyles from './useStyles'

const Portfolio = ({ data, className, ...rest }: ViewComponentProps): JSX.Element => {
    const classes = useStyles();

    const leftGridData = data.slice(0, 2);
    const rightGridData = data.slice(2);

    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <SectionHeader
                        title={
                            <span>
                                Check out some of my work{' '}<br/>
                            </span>
                        }
                        titleVariant="h4"
                        subtitle="Here is some of my latest projects"
                        disableGutter
                    />
                    <br/>
            <div className={classes.grid}>
                <div className={classes.leftGrid}>
                    {leftGridData.map((item: any, index: number) => (
                        <div className={classes.folioItem} key={index} data-aos="fade-up">
                            <Image
                                src={item.cover}
                                alt={item.title}
                                className={clsx('folio__image', classes.image)}
                                lazy={false}
                            />
                            <div className={classes.folioInfoWrapper}>
                                <div>
                                    <Typography variant="h6" className={classes.folioTitle}>
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        className={classes.folioSubtitle}
                                    >
                                        {item.subtitle}
                                    </Typography>
                                    <Button href={item.href} variant="outlined" color="secondary">
                                        View more
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={classes.rightGrid}>
                    {rightGridData.map((item: any, index: number) => (
                        <div className={classes.folioItem} key={index} data-aos="fade-up">
                            <Image
                                src={item.cover}
                                alt={item.title}
                                className={clsx('folio__image', classes.image)}
                                lazy={false}
                            />
                            <div className={classes.folioInfoWrapper}>
                                <div>
                                    <Typography variant="h6" className={classes.folioTitle}>
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        className={classes.folioSubtitle}
                                    >
                                        {item.subtitle}
                                    </Typography>
                                    <Button href={item.href} variant="outlined" color="secondary">
                                        View more
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
