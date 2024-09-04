import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ReactNode, createContext, useEffect, useState } from "react";

type AuthContext = {
  isLoaded: boolean;
  isReducedMotion: boolean;
  setLoaded: (state: boolean) => void;
  setReducedMotion: (state: boolean) => void;
};

export const LoadingContext = createContext<AuthContext>({
  isLoaded: false,
  isReducedMotion: false,
  setLoaded: () => {},
  setReducedMotion: () => {},
});

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(true);

  const [reducedMotion, setReducedMotion] = useLocalStorage<boolean>(
    "reduced-motion",
    true
  );

  useEffect(() => {
    setIsReducedMotion(reducedMotion);
  }, [reducedMotion]);

  const handleSetReducedMotion = (state: boolean) => {
    setReducedMotion(state);
    setIsReducedMotion(state);
  };

  const setLoaded = (state: boolean) => {
    setIsLoaded(state);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoaded,
        setLoaded,
        isReducedMotion,
        setReducedMotion: handleSetReducedMotion,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
