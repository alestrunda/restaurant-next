import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const LINKS = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "",
    title: "About",
  },
  {
    href: "",
    title: "Igredients",
  },
  {
    href: "",
    title: "Menu",
  },
  {
    href: "",
    title: "Reviews",
  },
  {
    href: "/contact",
    title: "Reservations",
  },
];

const Item = ({ active, href, title }) => (
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

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="font-serif font-bold text-shadow-sm text-xl mb-4">
      <ul className="flex justify-between">
        {LINKS.map((link, index) => (
          <Item
            active={router.pathname === link.href}
            href={link.href}
            key={index}
            title={link.title}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
