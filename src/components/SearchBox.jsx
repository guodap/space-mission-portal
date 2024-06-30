import PropTypes from "prop-types";

export const SearchBox = ({ placeholder, ariaLabel, handlerFunction }) => {
  const handleChange = (event) => {
    handlerFunction(event.target.value);
  };

  return (
    <input
      type="search"
      onChange={handleChange}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className="search-input"
      style={{
        backgroundColor: "white",
        borderStyle: "solid",
        borderColor: "grey",
        borderRadius: "20px",
        borderWidth: "1px",
        height: "50px",
      }}
    />
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  handlerFunction: PropTypes.func.isRequired,
};
