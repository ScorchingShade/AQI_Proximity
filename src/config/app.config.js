export const APP = {
  TITLE: 'Proximity AQI',
  SOCKET_SERVER_URL: 'wss://city-ws.herokuapp.com',
  CATEGORIES: [
    { name: 'GOOD', startRange: 0, endRange: 50, color: '#52B157' },
    { name: 'SATISFACTORY', startRange: 51, endRange: 100, color: '#a6d86f' },
    { name: 'MODERATE', startRange: 101, endRange: 200, color: '#ffb83e' },
    { name: 'POOR', startRange: 201, endRange: 300, color: '#f65314' },
    { name: 'VERY POOR', startRange: 301, endRange: 400, color: '#fe038b' },
    { name: 'SEVERE', startRange: 401, endRange: 500, color: '#f1011e' },
  ],
};

//Simple config file to contain data for labels on charts etc.