import React from "react";
import api from "../api";
import getDisplayName from "../helpers/getDisplayName";

export default Component => {
  class WithSubsciption extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        api: api(props.coin),
        data: []
      };
    }

    updateData = data => {
      const { price } = JSON.parse(data);
      this.setState(prevState => {
        const nextData = [parseFloat(price), ...prevState.data];
        // if (nextData.length > this.props.count) {
        //   nextData.length = this.props.count;
        // }
        return {
          data: nextData
        };
      });
    };

    componentDidMount() {
      this.state.api.subscribe(this.updateData);
    }

    componentWillUnmount() {
      this.state.api.unsubscribe(this.updateData);
    }

    render() {
      return <Component {...this.props} data={this.state.data} />;
    }
  }

  WithSubsciption.displayName = `withSubsciption(${getDisplayName(Component)})`;

  return WithSubsciption;
};
