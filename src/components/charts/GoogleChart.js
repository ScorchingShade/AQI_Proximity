import React from "react";
import Chart from "react-google-charts";

function GoogleChart({ cities }) {
  let data1 = [["City", "AQI"]];

  const data3 = cities.map((city) => [
    city.city,
    Math.round(city.aqi * 100 + Number.EPSILON) / 100,
  ]);
  let dataFinal = [...data1, ...data3];
  console.log(dataFinal);
  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="GeoChart"
        data={dataFinal}
        options={{
          region: "IN",
          displayMode: "markers",
          colorAxis: {
            colors: [
              "green",
              "lightgreen",
              "yellow",
              "orange",
              "red",
              "maroon",
            ],
          },
        }}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="AIzaSyAYeOHZCDSKlpZXGBhMES5vc6RpXdQUZuw"
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}

export default GoogleChart;
