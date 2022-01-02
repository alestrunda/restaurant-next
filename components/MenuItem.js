import classNames from "classnames";

const MenuItem = ({ children, isSpecial = false, price, title }) => (
  <div
    className={classNames("px-2 mb-6 border", {
      "border-transparent": !isSpecial,
      "border-yellow-500 border-opacity-30 relative": isSpecial,
    })}
  >
    {isSpecial && (
      <span className="absolute top-0 -right-px px-2 py-1 bg-yellow-500 text-white text-sm -translate-y-full">
        Special
      </span>
    )}
    <div className="flex justify-between py-2 font-cursive text-xl text-yellow-500 border-b border-opacity-30 border-yellow-500">
      <span>{title}</span>
      <span>${price}</span>
    </div>
    <div className="py-2">{children}</div>
  </div>
);

export default MenuItem;
