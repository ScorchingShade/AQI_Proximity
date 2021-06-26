import { APP } from '../config/app.config';
let socket;

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
