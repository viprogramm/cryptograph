import React from "react";
import { string, func } from "prop-types";

class WithWebSocket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ws: new WebSocket(props.url)
    };
  }

  componentDidMount() {
    const { ws } = this.state;
    const { onOpen, onMessage, onClose } = this.props;

    ws.onopen = () => {
      if (typeof onOpen === "function") {
        onOpen(ws);
      }
    };

    ws.onmessage = event => {
      if (typeof onMessage === "function") {
        onMessage(event.data);
      }
    };

    ws.onclose = event => {
      if (typeof onClose === "function") {
        onClose(event);
      }
    };

    ws.onerror = function(error) {
      console.error(error.messages);
    };
  }

  componentWillUnmount() {
    const { ws } = this.state;
    const { beforeClose } = this.props;
    if (typeof onClose === "function") {
      beforeClose(ws);
    }
    ws.close();
  }

  render() {
    return null;
  }
}

WithWebSocket.propTypes = {
  url: string.isRequired,
  onOpen: func,
  onMessage: func,
  beforeClose: func,
  onClose: func
};

export default WithWebSocket;
