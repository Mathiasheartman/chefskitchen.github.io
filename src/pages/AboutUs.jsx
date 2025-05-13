function AboutUs({ aboutUsRef }) {
  return (
    <section
      ref={aboutUsRef}
      className="relative w-full px-7 pt-20 text-center md:px-10 lg:pt-30"
    >
      <h4 className="md:text-md pb-3 text-sm tracking-[0.7rem] text-[var(--defaultColor)] xl:text-lg">
        FEATURES
      </h4>
      <h1 className="text-2xl md:m-auto lg:text-4xl xl:text-5xl">
        Get a many of interesting features.
      </h1>
      <div className="justify-center gap-5 pt-30 md:flex-col lg:mb-30 lg:flex lg:flex-row">
        <div className="pb-20 sm:flex sm:gap-6 sm:pb-0">
          <div className="featureBg relative mb-20 h-100 rounded-4xl sm:mb-0 lg:h-50 lg:w-50 xl:h-50 xl:w-75">
            <img
              className="absolute bottom-60 left-1/2 -translate-x-1/2 lg:bottom-2 lg:h-75"
              src="/featureOne.svg"
              alt="featureOne"
            />
            <h1 className="pt-25 text-lg lg:text-xl xl:text-2xl">
              Menu variations
            </h1>
            <p className="text-md px-5 pb-3 xl:text-xl">
              Sed ut perspiciatis unde omnis iste natus error
            </p>
            <a
              className="text-[var(--defaultColor)] underline-offset-4 hover:text-[var(--defaultColor)] hover:underline lg:text-lg xl:text-xl"
              href=""
            >
              Learn More{" >"}
            </a>
          </div>
          <div className="featureBg relative h-100 rounded-4xl lg:h-50 lg:w-50 xl:h-50 xl:w-75">
            <img
              className="absolute bottom-60 left-1/2 -translate-x-1/2 lg:bottom-2 lg:h-75"
              src="/featureTwo.svg"
              alt="featureTwo"
            />
            <h1 className="pt-25 text-lg lg:text-xl xl:text-2xl">
              Cooking war
            </h1>
            <p className="text-md px-5 pb-3 xl:text-xl">
              Sed ut perspiciatis unde omnis iste natus error
            </p>
            <a
              className="text-[var(--defaultColor)] underline-offset-4 hover:text-[var(--defaultColor)] hover:underline lg:text-lg xl:text-xl"
              href=""
            >
              Learn More{" >"}
            </a>
          </div>
        </div>

        <div className="pb-20 sm:pb-0 md:flex md:gap-6">
          <div className="featureBg relative mb-20 h-100 rounded-4xl sm:mb-0 lg:h-50 lg:w-50 xl:h-50 xl:w-75">
            <img
              className="absolute bottom-60 left-1/2 -translate-x-1/2 lg:bottom-2 lg:h-75"
              src="/featureThree.svg"
              alt="featureThree"
            />
            <h1 className="pt-25 text-lg lg:text-xl xl:text-2xl">Best chef</h1>
            <p className="text-md px-5 pb-3 xl:text-xl">
              Sed ut perspiciatis unde omnis iste natus error
            </p>
            <a
              className="text-[var(--defaultColor)] underline-offset-4 hover:text-[var(--defaultColor)] hover:underline lg:text-lg xl:text-xl"
              href=""
            >
              Learn More{" >"}
            </a>
          </div>
          <div className="featureBg relative h-100 rounded-4xl lg:h-50 lg:w-50 xl:h-50 xl:w-75">
            <img
              className="absolute bottom-60 left-1/2 -translate-x-1/2 lg:bottom-2 lg:h-75"
              src="/featureFour.svg"
              alt="featureFour"
            />
            <h1 className="pt-25 text-lg lg:text-xl xl:text-2xl">Fast food</h1>
            <p className="text-md px-5 pb-3 xl:text-xl">
              Sed ut perspiciatis unde omnis iste natus error
            </p>
            <a
              className="text-[var(--defaultColor)] underline-offset-4 hover:text-[var(--defaultColor)] hover:underline lg:text-lg xl:text-xl"
              href=""
            >
              Learn More{" >"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
