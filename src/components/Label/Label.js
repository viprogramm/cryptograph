import React from "react";
import { string } from "prop-types";

const Label = ({ coin, currency }) => <h3>{`${coin} - ${currency}`}</h3>;

Label.propTypes = {
  coin: string.isRequired,
  currency: string.isRequired
};

export default Label;
