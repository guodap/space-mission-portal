import PropTypes from "prop-types";

export const Button = ({ disabled = false, onClick, label }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
};
