import { makeStyles } from '@material-ui/core/styles';
import { Theme1 } from '../config/theme.config';

//simple stylesheet for charts in react
export const useStyles = makeStyles({
  root: {
    fontFamily: 'Roboto',
    backgroundColor: Theme1.SECONDARY,
  },
  grow: {
    flexGrow: 1,
  },
  primaryColor: {
    backgroundColor: Theme1.PRIMARY,
  },
  container: {
    display: 'flex',
    padding: '2vw',
    backgroundColor: Theme1.SECONDARY,
  },
  header: {
    fontWeight: 'bolder',
  },

  viewScroll:{
    overflow: 'scroll',
    height:"100vh",

    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      overflow: 'scroll',
    height:"80vh",
   
    }
    
},
  headerLight: {
    fontWeight: 'bolder',
    color: Theme1.LIGHT,
  },
  loadContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  },
});
