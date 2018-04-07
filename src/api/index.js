const connections = {};

const getConnection = coin => {
  if (connections[coin]) {
    return connections[coin];
  } else {
    connections[coin] = {};
  }

  const websocket = new WebSocket("ws://coins-stream.demo.javascript.ninja");

  websocket.onopen = () => {
    websocket.send(JSON.stringify({ type: "subscribe", currency: coin }));
  };

  websocket.onmessage = ({ data }) => {
    if (!connections[coin] || !connections[coin].listeners) {
      return;
    }
    const { listeners } = connections[coin];
    listeners.forEach(l => l(data));
  };

  websocket.onerror = function({ messages }) {
    console.error(messages);
  };

  connections[coin] = {
    listeners: [],
    unsubscribe: () => {
      websocket.send(JSON.stringify({ type: "unsubscribe", currency: coin }));
      connections[coin] = null;
    }
  };

  return connections[coin];
};

export default coin => {
  const connection = getConnection(coin);

  return {
    subscribe: listener => {
      connection.listeners.push(listener);
      return () => {
        connection.listeners = connection.listeners.filter(l => l !== listener);
        if (connection.listeners.length === 0) {
          connection.unsubscribe();
        }
      };
    }
  };
};
