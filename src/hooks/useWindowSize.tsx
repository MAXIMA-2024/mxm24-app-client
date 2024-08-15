import { useLayoutEffect, useState } from "react";

export function useWindowSize(): { [T: string]: number } {
  const getSize = (): { [T: string]: number } => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useLayoutEffect(() => {
    const onResize = () => setWindowSize(getSize);
    window.addEventListener("resize", onResize);
    return (): void => window.removeEventListener("resize", onResize);
  }, []);

  return windowSize;
}
