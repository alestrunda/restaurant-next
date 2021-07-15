import classNames from "classnames";

const Decoration = ({ className, color = "gold", size = 6 }) => (
  <div
    className={classNames(
      "bg-no-repeat bg-center",
      color && `decoration-${color}`,
      `h-${size}`,
      className
    )}
  ></div>
);

export default Decoration;
