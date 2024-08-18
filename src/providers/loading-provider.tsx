import { ReactNode, createContext, useState } from "react";

type AuthContext = {
  isLoaded: boolean;
  setLoaded: (state: boolean) => void;
};

export const LoadingContext = createContext<AuthContext>({
  isLoaded: false,
  setLoaded: () => {},
});

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const setLoaded = (state: boolean) => {
    setIsLoaded(state);
  };

  return (
    <LoadingContext.Provider value={{ isLoaded, setLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};
