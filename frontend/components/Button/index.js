import styles from "./index.module.scss";
import PropTypes from "prop-types";
import { cn } from "../../lib/helpers";

const Button = ({ type, children, className, onClick }) => {
  return (
    <button
      type={type}
      className={cn(styles.wrapper, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button"
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
