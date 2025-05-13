import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";

function Header({ homeRef, scrollTo, aboutUsRef, recipeRef, galleryRef }) {
  const [show, setShow] = useState(false);

  const handleClick = function () {
    setShow(!show);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 m-auto bg-white px-7 py-2 lg:max-w-[1440px]">
      <div className="flex items-center justify-between pt-1">
        <div>
          <Logo />
        </div>
        <nav
          className={`absolute top-12 right-0 ${show ? "" : "hidden"} nav rounded-bl-lg bg-white sm:static sm:block`}
        >
          <ul className="flex flex-col gap-4 px-9 pt-2 pb-5 text-xl text-gray-700 sm:flex-row sm:gap-5 sm:text-gray-400 md:text-lg">
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
          </ul>
        </nav>
        <p className="top-18 right-10 flex cursor-pointer items-center text-xl">
          <img
            className="hidden h-4 sm:block md:h-8"
            src="/call.png"
            alt="call"
          />{" "}
          <span className="hidden text-xs text-black hover:text-amber-700 sm:block md:text-sm lg:text-lg">
            +1(909) 235-9814
          </span>
        </p>
        <div className="flex items-center gap-6">
          <Button className="hidden lg:block" variation="signIn">
            Sign in
          </Button>
          <Button className="hidden lg:block" variation="signUp">
            Sign up
          </Button>
        </div>
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
