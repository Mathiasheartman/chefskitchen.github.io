function Gallery({ galleryRef }) {
  return (
    <section
      ref={galleryRef}
      className="px-7 pt-20 pb-30 text-center md:px-10 lg:pt-20 lg:pb-60"
    >
      <h4 className="pb-3 text-sm tracking-[0.7rem] text-[var(--defaultColor)] md:text-lg">
        Our Gallery
      </h4>
      <h1 className="pb-20 text-5xl md:text-6xl">
        Gallery of our cooked food.
      </h1>

      <div className="flex gap-6">
        <div className="flex flex-col gap-6">
          <img className="w-200" src="/src/assets/foodone.jpg" alt="foodone" />
          <img
            className="w-200 rounded-3xl"
            src="/src/assets/foodtwo.jpg"
            alt="foodtwo"
          />
        </div>

        <div className="flex flex-col gap-6">
          <img
            className="w-200"
            src="/src/assets/foodthree.jpg"
            alt="foodthree"
          />
          <img
            className="w-200 rounded-3xl"
            src="/src/assets/foodfour.jpg"
            alt="foodfour"
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
