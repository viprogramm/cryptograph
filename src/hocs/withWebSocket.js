import React from "react";
import { string } from "prop-types";
import getDisplayName from "../helpers/getDisplayName";
import api from "../api";

export default Component => {
  class WithWebSocket extends React.Component {
    constructor(props) {
      super(props);
      this.api = api(props.coin);
      this.state = {
        data: []
      };
    }

    componentDidMount() {
      this.unsubscribe = this.api.subscribe(data => {
        this.setState(prevState => {
          return { data: [...prevState.data, JSON.parse(data)] };
        });
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      return <Component {...this.props} data={this.state.data} />;
    }
  }

  WithWebSocket.displayName = `withWebSocket(${getDisplayName(Component)})`;

  WithWebSocket.propTypes = {
    coin: string.isRequired
  };

  return WithWebSocket;
};
