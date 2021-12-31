import classNames from "classnames";
import React from "react";
import Navigation from "../../components/Navigation";

const Header = ({ children, isOverlay }) => {
  const content = (
    <>
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black to-transparent opacity-80"></div>
      <div className="container flex justify-between mx-auto relative z-20 px-14">
        <img className="self-center" src="/img/logo.png" />
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
        <div className="absolute left-0 top-0 w-full">{content}</div>
      ) : (
        <>{content}</>
      )}
      {children}
    </div>
  );
};

export default Header;
