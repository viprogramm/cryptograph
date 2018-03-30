import withMapProps from "../withMapProps";

const mapper = byProp => props => {
  return {
    ...props,
    data: props.data.map(v => v[byProp])
  };
};

export default byProp => Component => withMapProps(Component, mapper(byProp));
