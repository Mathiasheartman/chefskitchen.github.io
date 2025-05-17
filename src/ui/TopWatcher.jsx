import { useEffect, useState } from "react";

function TopWatcher() {
  const [top, setTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(top);

  return `${top ? "bg-white" : "bg-red-500"}`;
}

export default TopWatcher;
