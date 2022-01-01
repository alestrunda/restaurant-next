import React from "react";
import classNames from "classnames";

const HeadingSection = ({
  as = "h2",
  className,
  color = "yellow-500",
  children,
}) => {
  const Component = as;

  return (
    <Component
      className={classNames(
        "font-cursive text-2xl md:text-4xl text-center",
        className,
        color && `text-${color}`
      )}
    >
      {children}
    </Component>
  );
};

export default HeadingSection;
