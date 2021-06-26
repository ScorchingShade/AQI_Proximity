import { CardContent, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { useStyles } from "./chartStyles";


// Required to render the Cities dashboard
const Live = ({ cities }) => {
  const classes = useStyles();

  return (
    <div>
      <Card style={{ backgroundColor: "black" }}>
        <CardContent className={classes.MajorCitiesContentBox}>
        <h1 className={classes.SubHeaderCenter}>Welcome to AirQ</h1>
          <div className={classes.columnContainer}>
            {cities.map((city) => {
              return (
                <div key={city.city} className={classes.liveData}>
                  <Typography variant="subtitle2" className={classes.header}>
                    {city.city}
                  </Typography>

                  {Math.round(city.aqi * 100 + Number.EPSILON) / 100 > 0 &&
                  Math.round(city.aqi * 100 + Number.EPSILON) / 100 < 51 ? (
                    <Typography
                      variant="subtitle2"
                      className={classes.headerGood}
                    >
                      {Math.round(city.aqi * 100 + Number.EPSILON) / 100}
                    </Typography>
                  ) : Math.round(city.aqi * 100 + Number.EPSILON) / 100 > 50 &&
                    Math.round(city.aqi * 100 + Number.EPSILON) / 100 < 101 ? (
                    <Typography
                      variant="subtitle2"
                      className={classes.headerSatisfactory}
                    >
                      {Math.round(city.aqi * 100 + Number.EPSILON) / 100}
                    </Typography>
                  ) : Math.round(city.aqi * 100 + Number.EPSILON) / 100 > 101 &&
                    Math.round(city.aqi * 100 + Number.EPSILON) / 100 < 201 ? (
                    <Typography
                      variant="subtitle2"
                      className={classes.headerModerate}
                    >
                      {Math.round(city.aqi * 100 + Number.EPSILON) / 100}
                    </Typography>
                  ) : Math.round(city.aqi * 100 + Number.EPSILON) / 100 > 200 &&
                    Math.round(city.aqi * 100 + Number.EPSILON) / 100 < 301 ? (
                    <Typography
                      variant="subtitle2"
                      className={classes.headerPoor}
                    >
                      {Math.round(city.aqi * 100 + Number.EPSILON) / 100}
                    </Typography>
                  ) : Math.round(city.aqi * 100 + Number.EPSILON) / 100 > 300 &&
                    Math.round(city.aqi * 100 + Number.EPSILON) / 100 < 401 ? (
                    <Typography
                      variant="subtitle2"
                      className={classes.headerVPoor}
                    >
                      {Math.round(city.aqi * 100 + Number.EPSILON) / 100}
                    </Typography>
                  ) : Math.round(city.aqi * 100 + Number.EPSILON) / 100 > 400 &&
                    Math.round(city.aqi * 100 + Number.EPSILON) / 100 < 501 ? (
                    <Typography
                      variant="subtitle2"
                      className={classes.headerSevere}
                    >
                      {Math.round(city.aqi * 100 + Number.EPSILON) / 100}
                    </Typography>
                  ) : (
                    <Typography variant="subtitle2" className={classes.header}>
                      {Math.round(city.aqi * 100 + Number.EPSILON) / 100}
                    </Typography>
                  )}

<Typography variant="subtitle1" className={classes.SubHeaderDark}>
              {cities[0].update}
            </Typography>
                </div>
              );
            })}
          </div>

          <div>
            <Typography variant="subtitle1" className={classes.SubHeaderCenter}>
             Dashboard updated at {cities[0].update}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Live;
