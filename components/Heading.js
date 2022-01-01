import classNames from "classnames";

const Heading = ({ as = "h3", className, color = "yellow-500", children }) => {
  const Component = as;

  return (
    <Component
      className={classNames(
        "font-cursive text-xl md:text-2xl mb-3",
        className,
        color && `text-${color}`
      )}
    >
      {children}
    </Component>
  );
};

export default Heading;
