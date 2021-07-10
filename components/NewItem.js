import classNames from "classnames";
import Link from "next/link";

const NewItem = ({ active, href, title }) => (
  <li
    className={classNames(
      "border-t-4 mx-3 transition-all duration-300 hover:border-white",
      {
        "border-white": active,
        "border-transparent": !active,
      }
    )}
  >
    <Link href={href}>
      <a className="block py-8 px-2">{title}</a>
    </Link>
  </li>
);

export default NewItem;
