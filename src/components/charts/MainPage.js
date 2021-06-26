import React, { useEffect, useState } from "react";
import { initiateSocket, subscribe } from "../../api/socket";
import MajorCities from "./MajorCities";
import { useStyles } from "../../styles/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Typography, CardContent } from "@material-ui/core";

import GoogleChart from "./GoogleChart";
import Card from "@material-ui/core/Card";
import "../../common-css/GoogleMap.css";

//The Main page renders The Major cities chart, the google chart and layout
//TODO: Cleanup needed on rendering layout
//TODO: Possible to breakup api rendering using UseEffect
function MainPage() {
  const classes = useStyles();

  const defaultCities = [
    {
      city: "Mumbai",
      aqi: 381.62555547023916,
      update: `10:30`,
    },
    {
      city: "Bengaluru",
      aqi: 490.09818064317164,
      update: `8:30`,
    },
    {
      city: "Kolkata",
      aqi: 203.34304842576836,
      update: `1 hour ago`,
    },

    {
      city: "Chennai",
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

        let ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;

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
    <div className={classes.viewScroll}>
      {cities.length > 0 ? (
        <>
          <MajorCities cities={cities} />
          <br></br>
          <Card >
          <CardContent style={{ backgroundColor: "black",display: "flex",flexDirection: "column",alignItems: "center"}} >
              <GoogleChart cities={cities} />
              <Typography
                variant="subtitle1"
                style={{ color: "white", textAlign: "center", fontWeight:"bold" }}
              >
                City wise distribution of AQI, select marker for more details
              </Typography>
              
     </CardContent>
          </Card>
        </>
      ) : (
        <div className={classes.loadContainer}>
          {" "}
          <CircularProgress disableShrink />
        </div>
      )}
    </div>
  );
}

export default MainPage;
