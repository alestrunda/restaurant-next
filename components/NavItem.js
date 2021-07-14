import classNames from "classnames";
import Link from "next/link";

const NavItem = ({ active, href, title }) => (
  <li className="group mx-3 relative overflow-hidden">
    <div
      className={classNames(
        "absolute top-0 left-0 w-full h-1 bg-white transition-all duration-500 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100",
        { "translate-x-0": active },
        { "opacity-0": !active }
      )}
    ></div>
    <Link href={href}>
      <a className="block py-10 px-2">{title}</a>
    </Link>
  </li>
);

export default NavItem;
