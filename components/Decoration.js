import classNames from "classnames";

const sizeMap = {
  5: "h-5",
  6: "h-6",
  7: "h-7",
  8: "h-8",
};

const Decoration = ({ className, color = "gold", size = 6 }) => (
  <div
    className={classNames(
      "bg-no-repeat bg-center",
      color && `decoration-${color}`,
      sizeMap[size],
      className
    )}
  ></div>
);

export default Decoration;
