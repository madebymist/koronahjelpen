import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/helpers";
import styles from "./index.module.scss";

const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

export default Card;
