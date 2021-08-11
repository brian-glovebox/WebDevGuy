import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      background: theme.palette.alternate.main,
      width: '100%',
    },
    noBg: {
      background: 'transparent',
    },
    copy: {
      textAlign: 'center',
      maxWidth: 700,
      margin: '0 auto',
      padding: theme.spacing(2, 2),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4, 2),
      },
    },
    title: {
      marginBottom: theme.spacing(2),
    },
    logoImg: {
      maxWidth: 90,
    },
    fontWeight700: {
      fontWeight: 700,
    },
  }));

  export default useStyles;