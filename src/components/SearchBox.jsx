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
        border: "1px solid grey",
        borderRadius: "20px",
        height: "50px",
        paddingLeft: "10px",
        boxSizing: "border-box",
      }}
    />
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  handlerFunction: PropTypes.func.isRequired,
};
