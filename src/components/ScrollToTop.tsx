import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ isLoaded }: { isLoaded: boolean }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isLoaded) {
      console.log("scrolling to top");
      window.scrollTo(0, 0);
    }
  }, [pathname, isLoaded]);

  return null;
}

export default ScrollToTop;
