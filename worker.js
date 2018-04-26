// shared-worker.js
const connections = [];
onconnect = function(e) {
  const port = e.ports[0];
  connections.push(port);

  port.onmessage = function(e) {
    connections.forEach(function(connection) {
      // if (connection !== port) {
      connection.postMessage(e.data);
      // }
    });
  };
};
