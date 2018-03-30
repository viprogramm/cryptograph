import withWebSocket from "../../hocs/withWebSocket";
import withMapDataByProp from "../../hocs/withMap/dataByProp";
import Widget from "./Widget";

export default withWebSocket(withMapDataByProp("price")(Widget));
