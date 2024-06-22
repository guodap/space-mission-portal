export const Button = ({ disabled, onClick, label }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};
