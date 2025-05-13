import Button from "../ui/Button";

function Recipe({ recipeRef }) {
  return (
    <section ref={recipeRef} className="relative text-center lg:text-left">
      <div className="items-center px-7 pb-30 md:px-10 lg:flex">
        <img
          className="m-auto md:h-140 lg:h-150 lg:max-w-150"
          src="/cookWithUs.png"
          alt="cookWithUs"
        />
        <div>
          <h4 className="text-md pb-3 tracking-[0.7rem] text-[var(--defaultColor)]">
            COOK WITH US
          </h4>
          <h1 className="md:2xl m-auto pb-3 text-xl lg:text-4xl">
            Cooking together with the expert.
          </h1>
          <p className="pb-3 text-xl text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem
          </p>
          <p className="pb-10 text-xl text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium....
          </p>
          <Button variation="LetsCook">Learn more</Button>
        </div>
      </div>

      <img
        className="absolute right-0 bottom-85 hidden h-120 lg:block"
        src="/burgerPot.png"
        alt="burger"
      />

      <div className="bg-[var(--defaultColorfade)] pt-25 pb-80 text-center">
        <h4 className="pb-3 text-lg tracking-[0.7rem] text-[var(--defaultColor)]">
          EXPERT CHEFS
        </h4>
        <h1 className="pb-3 text-6xl">Let's meet the expert.</h1>
        {/* carousel */}
      </div>
    </section>
  );
}

export default Recipe;
