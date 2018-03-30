import React from "react";
import getDisplayName from "../helpers/getDisplayName";

export default (Component, mapper) => {
  function WithMapProps(props) {
    return <Component {...mapper(props)} />;
  }

  WithMapProps.displayName = `withMapProps(${getDisplayName(Component)})`;

  return WithMapProps;
};
