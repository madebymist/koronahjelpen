import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/helpers";
import styles from "./index.module.scss";

const Card = ({ children, className }) => {
  return <div className={cn(styles.card, className)}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

export default Card;
