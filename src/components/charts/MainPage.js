import React, { useEffect, useState } from 'react'
import { initiateSocket, subscribe } from '../../api/socket';
import MajorCities from './MajorCities';
import { useStyles } from '../../styles/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

function MainPage() {
    const classes = useStyles();

    const defaultCities = [
        {
          city: 'Mumbai',
          aqi: 381.62555547023916,
          update: `10:30`,
        },
        {
          city: 'Bengaluru',
          aqi: 490.09818064317164,
          update: `8:30`,
        },
        {
          city: 'Kolkata',
          aqi: 203.34304842576836,
          update: `1 hour ago`,
        },
    
        {
          city: 'Chennai',
          aqi: 139.87410786909228,
          update: `10:30`,
        },
       
      ];
    
      const [cities, setCities] = useState([]);
    
      const [updatedCities, setUpdatedCities] = useState(defaultCities);

      useEffect(() => {
        initiateSocket();
      }, []);



      useEffect(() => {
        subscribe((error, newMessages) => {
          if (error) return;
          let __cities__ = cities;
          newMessages.map((newMessage) => {
            const date = new Date();
            
           
           
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            let ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ':'+seconds+' ' + ampm;

            newMessage.update = `${strTime}`;
            let messageInCities = __cities__.findIndex(
              (city) => city.city === newMessage.city
            );
            messageInCities >= 0
              ? (__cities__[messageInCities] = newMessage)
              : __cities__.push(newMessage);
          });
          setUpdatedCities(newMessages);
    
          return setCities(__cities__);
        }, []);
      });

    return (
        <div>
           {console.log(cities)}
           {cities.length > 0 ? (
                 <MajorCities cities={cities} />
           ):(
            <div className={classes.loadContainer}>
              {' '}
              <CircularProgress disableShrink />
            </div>
          )}
        </div>
    )
}

export default MainPage
