import classNames from "classnames";

const Input = ({ className, id, placeholder, type = "text" }) => (
  <input
    className={classNames(
      "block mb-6 w-full border border-yellow-500 italic bg-white px-3 py-1 bg-opacity-20 transition-colors duration-300 focus:bg-yellow-500 focus:bg-opacity-20 focus:outline-none",
      className
    )}
    id={id}
    placeholder={placeholder}
    type={type}
  />
);

export default Input;
