import classNames from "classnames";
import Link from "next/link";

const ButtonOpacity = ({ className, color, children, href }) => {
  const classes = classNames(
    "uppercase px-9 py-3 bg-black bg-opacity-40 border-black border text-lg text-shadow-sm transition-colors hover:bg-opacity-70",
    className,
    color && `bg-${color} border-${color}`
  );

  if (href)
    return (
      <Link href={href}>
        <a className={classes}>{children}</a>
      </Link>
    );

  return <button className={classes}>{children}</button>;
};

export default ButtonOpacity;
