function Slides({ src, alt, rankChef }) {
  return (
    <div className="relative text-center">
      <img src={src} alt={alt} />
      <img
        className="absolute top-50 right-0"
        src="/linkedin.svg"
        alt="linkedin"
      />
      <p className="text-4xl">Shoo Thar Mien</p>
      <p>{rankChef}</p>
    </div>
  );
}

export default Slides;
