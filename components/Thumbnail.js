import classNames from "classnames";

const Thumbnail = ({ alt, className, src }) => (
  <img
    alt={alt}
    className={classNames(
      "rounded-full border-white border-4 border-opacity-10 transition-all duration-500 hover:border-opacity-40 hover:scale-110 hover:rotate-2",
      className
    )}
    src={src}
  />
);

export default Thumbnail;
