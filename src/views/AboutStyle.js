import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({

  aboutHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: "12px",
    fontFamily: 'Anton sans-serif',
    fontSize:'3.4rem',
    padding: "2vw"
    
  },

  aboutBody: {
    padding: '3vw',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    height: '100vh',
    justifyContent:"space-evenly",
 

  },

  aboutLayout:{
    padding: "0 0 2%",
    display: 'flex',
    flexDirection: 'row',
    height: '50vh',
    justifyContent: 'space-evenly',
  

  },

  layoutContent:{
      display: 'flex',
    width:"100vw",
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    padding: "2%",
    alignItems:'center',
    justifyContent:"center",
    flexDirection: 'column'
  
  }
 
});
