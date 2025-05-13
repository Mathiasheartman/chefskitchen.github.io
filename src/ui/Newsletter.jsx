function Newsletter() {
  return (
    <section className="relative mx-7 rounded-2xl bg-[var(--defaultColor)] px-4 pt-4 pb-4 text-center text-white md:mx-10 md:rounded-4xl md:rounded-tr-[30rem] md:px-10 md:pt-20 md:pb-30 md:text-left lg:rounded-tr-[40rem]">
      <h4 className="pb-2 text-xl md:pb-5 md:text-lg lg:text-xl">NEWSLETTER</h4>
      <h1 className="relative pb-5 text-2xl md:pb-10 md:text-3xl lg:text-5xl">
        Subscribe our
        <br className="hidden lg:block" /> newsletter.
      </h1>
      <div className="relative flex rounded-full bg-white px-1.5 text-black sm:w-90 sm:py-1 md:py-2 lg:w-130 lg:px-3 lg:py-4">
        <input
          className="w-[100%] outline-0"
          type="email"
          name=""
          id=""
          placeholder="@ enter your email-address"
        />
        <button className="text-bold my-1 rounded-full bg-black px-2 pb-1 text-white sm:text-2xl md:my-0 md:px-2 md:pb-2 md:text-4xl">
          &rarr;
        </button>
      </div>
      <p className="absolute right-115 bottom-10 hidden h-15 w-15 rounded-full bg-amber-300 lg:block"></p>
      <p className="absolute right-30 bottom-30 hidden h-7 w-7 rounded-full bg-blue-400 md:block"></p>
      <div>
        <img
          className="absolute top-0 right-0 hidden sm:right-[-3%] sm:block sm:h-50 md:right-0 md:bottom-20 md:h-90 lg:right-10"
          src="/soup.svg"
          alt="soup"
        />
        {/* <img
          className="absolute top-35 left-265 h-80"
          src="src\img\lec.svg"
          alt="lec"
        /> */}
        <img
          className="absolute top-95 right-60 hidden lg:block"
          src="/onion.svg"
          alt="onion"
        />
      </div>
    </section>
  );
}

export default Newsletter;
