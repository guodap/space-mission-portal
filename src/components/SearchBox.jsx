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
        borderBlockStyle: "solid", 
        borderColor: "grey",
        borderRadius: "20px", 
        borderBlockWidth: "100%",
        height: "50px",
      }}
    />
  );
};
