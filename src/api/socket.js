import { APP } from '../config/app.config';
let socket;

//built only to initiate a socket connection with the endpoint picked from config files

export const initiateSocket = () => {
  socket = new WebSocket(APP.SOCKET_SERVER_URL);
};

export const subscribe = (cbk) => {
  if (!socket) {
    initiateSocket();
  }

  socket.onmessage = (event) => {
    return cbk(null, JSON.parse(event.data));
  };
};
