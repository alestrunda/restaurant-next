import classNames from "classnames";

const ButtonOpacity = ({ className, color, children }) => (
  <button
    className={classNames(
      "uppercase px-9 py-3 bg-black bg-opacity-40 border-black border text-lg text-shadow-sm transition-colors hover:bg-opacity-70",
      className,
      color && `bg-${color} border-${color}`
    )}
  >
    {children}
  </button>
);

export default ButtonOpacity;
