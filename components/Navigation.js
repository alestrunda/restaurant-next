import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LINKS = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/ingredients",
    title: "Igredients",
  },
  {
    href: "/menu",
    title: "Menu",
  },
  {
    href: "/reviews",
    title: "Reviews",
  },
  {
    href: "/contact",
    title: "Reservations",
  },
];

const Item = ({ active, href, title }) => (
  <li className="group mx-3 relative overflow-hidden mb-5 lg:mb-0">
    <div
      className={classNames(
        "absolute top-0 left-0 w-full h-1 bg-white transition-all duration-500 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100",
        { "translate-x-0": active },
        { "opacity-0": !active }
      )}
    ></div>
    <Link href={href}>
      <a className="block py-3 lg:py-12 px-2">{title}</a>
    </Link>
  </li>
);

const Navigation = () => {
  const router = useRouter();
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <button className="relative z-10 lg:hidden" onClick={toggleMenu}>
        Menu
      </button>
      <nav
        className={classNames(
          "lg:block absolute lg:relative z-10 top-0 left-0 flex items-center justify-center bg-black bg-opacity-75 lg:bg-transparent text-center w-full lg:w-auto h-screen lg:h-auto overflow-auto font-serif font-bold text-shadow-sm text-xl",
          { hidden: !menuOpened }
        )}
        onClick={toggleMenu}
      >
        <ul className="flex justify-between flex-col lg:flex-row">
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
    </>
  );
};

export default Navigation;
