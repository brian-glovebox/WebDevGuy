import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    hero: {
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(-9),
      },
    },
    sectionAlternate: {
      background: 'transparent',
      backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 100%, ${theme.palette.background.paper} 0%)`,
      [theme.breakpoints.up('md')]: {
        backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 50%, ${theme.palette.background.paper} 0%)`,
      },
    },
    reviewSection: {
      background: theme.palette.secondary.main,
    },
    sectionSubscription: {
      paddingTop: 0,
    },
  }));

  export default useStyles;