import { useEffect, useState } from "react";

const useScoll = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    let scrollCheck = null;

    const getScrollPosition = () => {
      const scrollPosition = window.scrollY;
      const docHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const viewPosition = docHeight - innerHeight;

      setIsScroll(true);

      if (scrollPosition >= viewPosition) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }

      if (isScroll) {
        clearTimeout(scrollCheck);
      }

      scrollCheck = setTimeout(() => {
        setIsScroll(false);
      }, 1000);
    };

    window.addEventListener("scroll", getScrollPosition);

    return () => {
      window.removeEventListener("scroll", getScrollPosition);
    };
  }, []);

  return {isBottom, isScroll};
};

export default useScoll;
