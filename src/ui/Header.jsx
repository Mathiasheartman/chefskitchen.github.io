import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";

function Header({ homeRef, scrollTo, aboutUsRef, recipeRef, galleryRef }) {
  const [show, setShow] = useState(false);

  const handleClick = function () {
    setShow(!show);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 m-auto bg-white px-7 py-3 lg:max-w-[1440px]">
      <div className="flex items-center justify-between pt-1 pb-2">
        <div>
          <Logo />
        </div>
        <nav
          className={`absolute top-0 right-0 left-0 ${show ? "" : "hidden"} nav rounded-bl-lg bg-white sm:static md:block`}
        >
          <p className="py-4 pl-7 sm:hidden">
            <Logo />
          </p>
          <ul className="flex flex-col gap-5 px-14 pt-4 pb-5 text-xl text-gray-700 sm:flex-row sm:px-0 sm:text-gray-700 md:items-center md:gap-15 md:text-lg">
            <li
              onClick={() => scrollTo(homeRef)}
              className="cursor-pointer hover:text-[var(--defaultColor)]"
            >
              Home
            </li>
            <li
              onClick={() => scrollTo(aboutUsRef)}
              className="cursor-pointer hover:text-[var(--defaultColor)]"
            >
              About us
            </li>
            <li
              onClick={() => scrollTo(recipeRef)}
              className="cursor-pointer hover:text-[var(--defaultColor)]"
            >
              Recipe
            </li>
            <li
              onClick={() => scrollTo(galleryRef)}
              className="cursor-pointer hover:text-[var(--defaultColor)]"
            >
              Gallery
            </li>
            <p className="top-18 right-10 flex cursor-pointer items-center text-xl">
              <img
                className="hidden h-4 sm:block md:h-8"
                src="/call.png"
                alt="call"
              />
              <span className="text-lg text-black hover:text-amber-700 md:text-sm lg:text-lg">
                +1(909) 235-9814
              </span>
            </p>
            <div className="flex w-fit flex-col gap-6 md:flex-row">
              <Button variation="signIn">Sign in</Button>
              <Button variation="signUp">Sign up</Button>
            </div>
          </ul>
        </nav>

        <button
          onClick={handleClick}
          className={`absolute right-4 flex flex-col gap-1 sm:hidden`}
        >
          <p
            className={` ${show ? "menuFirst" : ""} h-0.5 w-8 rounded-full bg-black`}
          ></p>
          <p
            className={`${show ? "menuMid" : ""} h-0.5 w-8 rounded-full bg-black`}
          ></p>
          <p
            className={`${show ? "menuLast" : ""} h-0.5 w-8 rounded-full bg-black`}
          ></p>
        </button>
      </div>
    </header>
  );
}

export default Header;
