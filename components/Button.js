import classNames from "classnames";

const Button = ({ children, className, type }) => (
  <button
    className={classNames(
      "block mx-auto mb-4 text-white px-9 py-2 bg-yellow-500 bg-opacity-70 text-lg text-shadow-sm transition-colors hover:bg-opacity-100",
      className
    )}
    type={type}
  >
    {children}
  </button>
);

export default Button;
