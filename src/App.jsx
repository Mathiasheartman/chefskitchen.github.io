import { useEffect, useRef, useState } from "react";
import "./index.css";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import HeroSection from "./pages/HeroSection";
import Recipe from "./pages/Recipe";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Newsletter from "./ui/Newsletter";

function App() {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const recipeRef = useRef(null);
  const galleryRef = useRef(null);
  const [inView, setInView] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  console.log(inView);

  const scrollTo = (ref, offset = 150) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });

    if (ref === homeRef) {
      const top = ref.current.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    } else if (ref === aboutUsRef || ref === recipeRef || ref === galleryRef) {
      const top = ref.current.offsetTop - offset + 150;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <main className="m-auto max-w-[1440px]">
      <Header
        scrollTo={scrollTo}
        homeRef={homeRef}
        aboutUsRef={aboutUsRef}
        recipeRef={recipeRef}
        galleryRef={galleryRef}
      />
      <HeroSection homeRef={homeRef} scrollTo={scrollTo} />
      <AboutUs aboutUsRef={aboutUsRef} />
      <Recipe recipeRef={recipeRef} />
      <Gallery galleryRef={galleryRef} />
      <Newsletter />
      <Footer
        scrollTo={scrollTo}
        homeRef={homeRef}
        aboutUsRef={aboutUsRef}
        recipeRef={recipeRef}
        galleryRef={galleryRef}
      />

      {!inView && (
        <button
          onClick={() => scrollTo(homeRef)}
          className="fixed right-5 bottom-3 z-1000 h-9 w-8 cursor-pointer rounded-lg bg-[var(--defaultColor)] text-center text-2xl font-bold text-gray-900 md:h-11 md:w-10"
        >
          &#x2191;
        </button>
      )}
    </main>
  );
}

export default App;
