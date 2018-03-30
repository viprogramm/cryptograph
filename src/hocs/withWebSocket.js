import React from "react";
import WebSocket from "../components/WebSocket/WebSocket";
import getDisplayName from "../helpers/getDisplayName";

export default Component => {
  class WithWebSocket extends React.Component {
    state = {
      data: []
    };

    onOpen = ws => {
      ws.send(JSON.stringify({ type: "subscribe", currency: this.props.coin }));
    };

    beforeClose = ws => {
      ws.send(
        JSON.stringify({ type: "unsubscribe", currency: this.props.coin })
      );
    };

    onMessage = data => {
      this.setState(prevState => {
        return { data: [...prevState.data, JSON.parse(data)] };
      });
    };

    render() {
      return (
        <React.Fragment>
          <WebSocket
            url="ws://coins-stream.demo.javascript.ninja"
            onOpen={this.onOpen}
            onMessage={this.onMessage}
            beforeClose={this.beforeClose}
          />
          <Component {...this.props} data={this.state.data} />
        </React.Fragment>
      );
    }
  }

  WithWebSocket.displayName = `withWebSocket(${getDisplayName(Component)})`;

  return WithWebSocket;
};
