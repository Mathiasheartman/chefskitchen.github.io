function Logo() {
  return (
    <div className="h-6 md:h-12">
      <a className="flex items-center gap-2" href="">
        <img className="h-5 md:h-10" src="/logo.svg" alt="" />
        <p className="text-lg text-black">Chef's Kitchen</p>
      </a>
    </div>
  );
}

export default Logo;
