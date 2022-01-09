import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Navigation from "../../components/Navigation";

const Header = ({ children, isOverlay }) => {
  const content = (
    <>
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black to-transparent opacity-80"></div>
      <div className="container flex justify-between items-center mx-auto px-14">
        <div className="relative z-10 flex justify-center h-124px">
          <Link href="/">
            <img className="self-center cursor-pointer" src="/img/logo.png" />
          </Link>
        </div>
        <Navigation />
      </div>
    </>
  );

  return (
    <div
      className={classNames(
        "bg-section-1 bg-center bg-cover text-white relative",
        { "min-h-screen flex flex-col justify-center": isOverlay }
      )}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-10"></div>
      {isOverlay ? (
        <div className="absolute left-0 top-0 w-full z-20">{content}</div>
      ) : (
        <>{content}</>
      )}
      {children}
    </div>
  );
};

export default Header;
