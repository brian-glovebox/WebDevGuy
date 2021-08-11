import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    drawer: {
        width: '100%',
        maxWidth: 325,
    },
    root: {
        height: '100%',
        padding: theme.spacing(1),
    },
    nav: {
        marginBottom: theme.spacing(1),
    },
}));

export default useStyles;