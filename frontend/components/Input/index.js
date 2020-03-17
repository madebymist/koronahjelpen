import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Input = props => {
  const { type, label } = props;
  const placeholder = props.placeholder || props.label;
  return (
    <>
      {label && (
        <label htmlFor={styles.input} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        id={styles.input}
        className={styles.input}
      />
    </>
  );
};

Input.defaultProps = {
  type: "text"
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired
};

export default Input;
