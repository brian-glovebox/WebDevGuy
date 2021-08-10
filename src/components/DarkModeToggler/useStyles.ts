import { makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
    },
    border: {
        width: theme.spacing(5),
        height: theme.spacing(2),
        borderRadius: theme.spacing(3),
        border: '3px solid',
        borderColor: theme.palette.divider,
        backgroundColor: 'transparent',
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(6),
            height: theme.spacing(3),
        }
    },
    borderDark: {
        borderColor: colors.indigo[700],
    },
    modeToggler: {
        position: 'absolute',
        top: `-${theme.spacing(1 / 2)}px`,
        left: `-${theme.spacing(1 / 2)}px`,
        width: theme.spacing(3),
        height: theme.spacing(3),
        borderRadius: '50%',
        backgroundColor: theme.palette.text.primary,
        transition: `transform .3s cubic-bezier(.4,.03,0,1)`,
        cursor: 'pointer',
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        }
    },
    modeTogglerDark: {
        transform: `translateX(${theme.spacing(3)}px)`,
        backgroundColor: colors.indigo[900],
    },
    modeTogglerIcon: {
        fill: theme.palette.secondary.main,
        marginTop: theme.spacing(1 / 2),
        marginLeft: theme.spacing(1 / 2),
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(1),
            marginLeft: theme.spacing(1),
        }
    },
}));

export default useStyles;