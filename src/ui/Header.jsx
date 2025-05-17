import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import TopWatcher from "./topWatcher";

function Header({ homeRef, scrollTo, aboutUsRef, recipeRef, galleryRef }) {
  const [show, setShow] = useState(false);
  const navRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const [top, setTop] = useState();

  const handleClick = function () {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    function outsideClick(e) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        !toggleBtnRef.current.contains(e.target)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", outsideClick);
    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 m-auto px-7 py-3 transition-all duration-300 lg:max-w-[1440px] ${top ? "bg-gray-200 md:py-2" : "bg-gray-200 shadow-lg md:h-20 md:py-0"}`}
    >
      <div className="flex items-center justify-between pt-1 pb-2 md:pt-0 md:pb-1">
        <div>
          <Logo />
        </div>
        <nav
          ref={navRef}
          className={`absolute top-0 right-0 left-0 ${show ? "" : "hidden"} nav navCard rounded-bl-lg md:static md:block`}
        >
          <p className="py-4 pl-7 md:hidden">
            <Logo />
          </p>
          <ul className="flex w-fit flex-col gap-5 px-14 pt-4 pb-5 text-xl text-black sm:text-gray-700 md:flex-row md:items-center md:gap-7 md:px-0 md:text-[1rem] lg:gap-15 lg:text-xl">
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
            {/* <p className="top-18 right-10 flex cursor-pointer items-center text-xl">
              <img
                className="hidden h-4 sm:block md:h-8"
                src="/call.png"
                alt="call"
              />
              <span className="text-lg text-black hover:text-amber-700 md:text-sm lg:text-lg">
                +1(909) 235-9814
              </span>
            </p> */}
            <div className="flex w-fit flex-col gap-6 md:flex-row">
              <Button variation="signIn">Sign in</Button>
              <Button variation="signUp">Sign up</Button>
            </div>
          </ul>
        </nav>

        <button
          ref={toggleBtnRef}
          onClick={handleClick}
          className={`absolute right-4 flex flex-col gap-1 md:hidden`}
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
