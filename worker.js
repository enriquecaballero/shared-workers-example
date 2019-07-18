// shared-worker.js
const connections = [];
onconnect = function(e) {
  const port = e.ports[0];
  connections.push(port);

  port.onmessage = function(e) {
    connections.forEach(function(connection) {
      // Uncomment if if you want to block sending message to sender
      // if (connection !== port) {
      connection.postMessage(e.data);
      // }
    });
  };
};
