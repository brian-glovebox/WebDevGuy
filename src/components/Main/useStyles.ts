import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    hero: {
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(-9),
      },
    },
    sectionAlternate: {
      background: 'transparent',
      backgroundImage: `linear-gradient(180deg, #2D3748 100%, ${theme.palette.background.paper} 0%)`,
      [theme.breakpoints.up('md')]: {
        backgroundImage: `linear-gradient(180deg, #2D3748 50%, ${theme.palette.background.paper} 0%)`,
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