import Button from "../ui/Button";

function HeroSection({ homeRef }) {
  return (
    <section
      ref={homeRef}
      className="relative flex flex-col items-center px-7 pt-25 text-center md:px-10 md:pt-30 lg:flex-row lg:text-left"
    >
      <div>
        <h1 className="pb-5 text-center text-4xl leading-none sm:text-5xl md:text-6xl xl:text-7xl">
          Cook anything with the experts
        </h1>
        <p className="pb-10 text-sm text-gray-500 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam
        </p>
        <div className="flex justify-center gap-5 lg:justify-start">
          <Button variation="LetsCook">Lets cook</Button>
          <Button variation="ExploreNow">Explore now</Button>
        </div>
      </div>
      <div className="relative">
        <img
          className="block pt-8 md:h-130 md:w-170 md:pt-0 lg:h-140 lg:w-220"
          src="/src/assets/banner-image.png"
          alt="bannerImg"
        />
        <div className="absolute bottom-10 left-10 hidden w-55 items-center gap-2 rounded-2xl bg-white px-2 py-3 lg:flex">
          <img className="h-14" src="/src/assets/pizza.svg" alt="" />
          <p className="w-50">More than 500+ recipes.</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
