import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import Paper from '@material-ui/core/Paper';
import SectionHeader from '../SectionHeader/SectionHeader';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import useStyles from './useStyles';

export default function CustomizedTimeline() {
    const classes = useStyles();

    return (
        <>
            <SectionHeader
                title={
                    <span>
                        My Developer Timeline{' '}<br />
                    </span>
                }
                titleVariant="h4"
                subtitle="Take a look at some of the programs and Jobs I have done."
                disableGutter
            />
            <br />
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            February 2019
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Full Stack Web Development
                            </Typography>
                            <Typography>University of Denver</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            October 2019 - Current
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Web Development Instructor & Tutor
                            </Typography>
                            <Typography>Oversaw a cohort of 30+ through an intensive 24 week course teaching the MERN Stack. </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            December 2019
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <MenuBookIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Fullstack D3 and Data Visualization
                            </Typography>
                            <Typography>Intensive course revolved around D3.js and Data Visualizations.</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            February 2020
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <AssignmentTurnedInIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                React Complete Guide
                            </Typography>
                            <Typography>Completed 50+ Hour Udemy Course on all things React</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            October 2020
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <ImportantDevicesIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                React-Native Complete Guide
                            </Typography>
                            <Typography>Completed 50+ Hour course revolving around all things react native</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            June 2021
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot >
                            <CodeIcon />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Hatchways Career Accelerator Program
                            </Typography>
                            <Typography>4-Week Intensive program using the MERN Stack with TypeScript.</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    );
}