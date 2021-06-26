import { makeStyles } from '@material-ui/core/styles';
import { Theme1 } from '../../config/theme.config';

export const useStyles = makeStyles({
  primaryColor: {
    backgroundColor: Theme1.PRIMARY,
  },
  header: {
    fontWeight: '800',
    color: 'black',
  },
  headerGood: {
    fontWeight: '800',
    color: 'green',
  },
  headerSatisfactory: {
    fontWeight: '800',
    color: 'lightgreen',
  },
  headerModerate: {
    fontWeight: '800',
    color: '#b0b000',
  },

  headerPoor: {
    fontWeight: '800',
    color: 'orange',
  },

  headerVPoor: {
    fontWeight: '800',
    color: 'red',
  },
  headerSevere: {
    fontWeight: '800',
    color: 'maroon',
  },
  SubHeader: {
    fontWeight: 'bolder',
    color: Theme1.LIGHT,
  },
  SubHeaderCenter: {
 
  
    fontWeight: 'bolder',
    color: Theme1.LIGHT,
    textAlign: 'center'
  },
  SubHeaderDark: {
    fontWeight: '200',
    color: 'black',
  },
  singleCardContent: {
    display: 'flex',
  },
  buttonLight: {
    backgroundColor: Theme1.SECONDARY,
    fontWeight: 'bolder',
    border: 'none',
    margin: '2vw',
    width: '10vw',
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  singleCityCard: {
    borderRadius: 20,
    width: '38vw',
    height: '50vh',
  },
  singleCityValue: {
    position: 'absolute',
    marginTop: '15vh',
    fontWeight: 'bolder',
  },
  singleCityHeader: {
    display: 'flex',
    fontWeight: 'bolder',
    position: 'absolute',
    marginTop: '25vh',
    width: '20vw',
    justifyContent: 'center',
    backgroundColor: Theme1.PRIMARY01,
  },
  liveDataCard: {
    width: '55vw',
    height: '50vh',
    borderRadius: 20,
    backgroundColor: Theme1.PRIMARY01,
    marginLeft: '2vw',
  },
  liveData: {
    color: '#f0f0f7',
    margin: '1vw',
    borderRadius: 10,
    padding: '2vw',
    width: '8vw',
    backgroundColor:'white',
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      flexDirection:'column',
     flexWrap: 'nowrap',
     padding: 'none',
     width: '100vw',
     alignItems: 'center',
     textAlign: 'center',
   
    }
  },
  MajorCitiesContentBox: {
    flexWrap: 'wrap',
  },
  columnContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '1vw',
    flexDirection:'row',
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      flexDirection:'column',
     flexWrap: 'nowrap',
     overflow: 'scroll',
     padding: 'none',
     alignItems: 'center',
      height: '78vh'
    }

 
  },
  compareDataCard: {
    display: 'flex',
    minWidth: '95.2vw',
    minHeight: '60vh',
    backgroundColor: Theme1.PRIMARY01,
    marginInline: '4vh',
    borderRadius: 10,
    justifyContent: 'center',
  },
  compareData: {
    display: 'flex',
  },
  categoryData: {
    padding: '1vw',
    width: '14vw',
    height: '1vh',
    backgroundColor: Theme1.PRIMARY01,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 20,
    justifyContent: 'center',
  },
  cityCard: {
    margin: '1vw',
    width: '14vw',
    height: '10vh',
  },
  bold: {
    fontWeight: 'bolder',
  },
  cityName: {
    overflow: 'hidden',
    fontWeight: 'bolder',
    marginLeft: '1vw',
  },
  time: {
    marginLeft: '1vw',
  },
  subtitle: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
