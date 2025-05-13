import Logo from "./Logo";

function Footer({ homeRef, scrollTo, aboutUsRef, recipeRef, galleryRef }) {
  return (
    <footer>
      <div className="gap-50 px-7 py-25 md:px-10 lg:flex">
        <div>
          <Logo />
          <p className="pt-8 pb-5 text-sm text-gray-400 md:w-80 lg:pb-0">
            Open an account in minutes, get full financial control for much
            longer.
          </p>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>

        <div className="m-auto flex flex-col gap-9 md:w-170 md:flex-row md:justify-between md:gap-0 lg:justify-around">
          <div className="flex flex-col md:gap-5">
            <h1 className="text-2xl">Company</h1>
            <div className="flex flex-col gap-3 text-lg text-gray-400">
              <a className="hover:text-[var(--defaultColor)]" href="">
                About
              </a>
              <a className="hover:text-[var(--defaultColor)]" href="">
                Careers
              </a>
              <a className="hover:text-[var(--defaultColor)]" href="">
                Mobile
              </a>
              <a className="hover:text-[var(--defaultColor)]" href="">
                Blog
              </a>
              <a className="hover:text-[var(--defaultColor)]" href="">
                How we work?
              </a>
            </div>
          </div>

          <div className="flex flex-col md:gap-5">
            <h1 className="text-2xl">Information</h1>
            <div className="flex flex-col gap-3 text-lg text-gray-400">
              <a className="hover:text-[var(--defaultColor)]" href="">
                Help/FAQ
              </a>
              <a className="hover:text-[var(--defaultColor)]" href="">
                Press
              </a>
              <a className="hover:text-[var(--defaultColor)]" href="">
                Affiliates
              </a>
              <a className="hover:text-[var(--defaultColor)]" href="">
                Hotel owners
              </a>
              <a className="hover:text-[var(--defaultColor)]" href="">
                Partners
              </a>
            </div>
          </div>

          <div className="flex flex-col md:gap-5">
            <h1 className="text-2xl">More</h1>
            <ul className="flex flex-col gap-3 text-lg text-gray-400">
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
          </div>
        </div>
      </div>

      <hr className="text-gray-300" />

      <div className="items-center justify-between px-7 py-9 text-center text-xs text-gray-500 md:px-10 md:text-sm lg:flex lg:text-lg">
        <p>
          @2025 - Chef's kitchen. Distributed By ThemeWagon and Developed by
          GetNextjsTemplates
        </p>
        <div className="flex justify-center gap-4 text-xs md:text-sm lg:text-lg">
          <a href="">Privacy policy</a>
          <p className="text-gray-300">|</p>
          <a href="">Terms & conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
