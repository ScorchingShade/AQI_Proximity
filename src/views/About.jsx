import React from "react";
import { useStyles } from "./AboutStyle";
import s1 from '../resources/s1.png';
import s2 from '../resources/s2.png';


// The about page hosted at /about
function About() {
  const classes = useStyles();
  return (
    <div className={classes.aboutBody}>
      <h1 className={classes.aboutHeader}>Welcome to AirQ</h1>

      <div className={classes.aboutLayout}>
        <div className={classes.layoutContent}>
        <img src={s1} width="600px" height="300vh" />
        </div>
        <div className={classes.layoutContent}>

            <h3>The objective</h3><br></br>
            <p>To monitor and analyse the air quality of Major Indian cities in Realtime</p>

            <br></br>
            <br></br>
            <br></br>
            <h3>Features Covered</h3><br></br>
            <ul style={{textAlign: 'center',listStyle: 'none',padding:0}}>
                <li>Live City-wise AQI Chart</li><br></br>
                <li>AQI upto 2 decimal Places</li><br></br>
                <li>Marker of Live AQI of only one city</li><br></br>
            </ul>
            <br></br>
            <br></br>
            
            <h3>Data Endpoint</h3><br></br>
            <ul style={{textAlign: 'center',listStyle: 'none',padding:0}}>
                <li>ws://city-ws.heroukuapp.com</li>
            </ul>
        </div>
        
      </div>
      <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
          <h2>The Legend followed</h2><br></br>
        <img src={s2} width="540px" height="250vh" />
        </div>
    </div>
  );
}

export default About;
