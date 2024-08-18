import { ReactNode, createContext, useEffect, useState } from "react";
import {
  type ResponseModel,
  useToastErrorHandler,
  baseUrl,
} from "@/hooks/useApi";
import axios, { AxiosError } from "axios";

type Panitia = {
  name: string;
  nim: string;
  divisiId: number;
  email: string;
  isVerified: boolean;
  divisi: {
    id: number;
    name: string;
  };
};

type Organisator = {
  name: string;
  nim: string;
  email: string;
  stateId: number;
  isVerified: boolean;
  state: {
    id: number;
    name: string;
  };
};

type Mahasiswa = {
  email: string;
  token: string;
  name: string;
  nim: string;
  angkatan: number;
  prodi: string;
  whatsapp: string;
  lineId: string;
};

type User =
  | {
      role: "mahasiswa";
      data: Mahasiswa;
    }
  | {
      role: "panitia";
      data: Panitia;
    }
  | {
      role: "organisator";
      data: Organisator;
    }
  | {
      role: "unknown";
      data: {
        email: string;
        name: string;
      };
    };

type AuthContext = {
  status: "loading" | "unauthenticated" | "authenticated";
  user: User | null;
  callBack: (ticket: string) => Promise<void>;
  // refresh: () => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContext>({
  status: "loading",
  user: null,
  callBack: async () => {},
  // refresh: async () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<
    "loading" | "unauthenticated" | "authenticated"
  >("loading");

  const errorHandler = useToastErrorHandler();

  const callBack = async (ticket: string) => {
    await axios.post<ResponseModel>(
      baseUrl + "/auth/sso",
      {
        ticket,
        issuer:
          (import.meta.env.VITE_FRONTEND_URL ?? "http://localhost:5173") +
          "/auth/sso",
      },
      { withCredentials: true }
    );

    const user = await axios.get<ResponseModel<User>>(
      baseUrl + "/auth/profile",
      {
        withCredentials: true,
      }
    );

    setUser(user.data.data);
    setStatus("authenticated");
    // toast({
    //   title: "Success",
    //   description: "Successfully logged in!",
    //   status: "success",
    //   isClosable: true,
    // });
  };

  const logout = () => {
    axios
      .delete<ResponseModel>(baseUrl + "/auth/logout", {
        withCredentials: true,
      })
      .then(() => {
        setUser(null);
        setStatus("unauthenticated");
        // toast({
        //   title: "Success",
        //   description: "Successfully logged out!",
        //   status: "success",
        //   isClosable: true,
        // });
      })
      .catch((err) => errorHandler(err));
  };

  useEffect(() => {
    axios
      .get<ResponseModel<User>>(baseUrl + "/auth/profile", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.data);
        setStatus("authenticated");
      })
      .catch((err: AxiosError<ResponseModel>) => {
        if (err.response?.status === 401) {
          axios
            .get<ResponseModel>(baseUrl + "/auth/refresh", {
              withCredentials: true,
            })
            .then(() => {
              axios
                .get<ResponseModel<User>>(baseUrl + "/auth/profile", {
                  withCredentials: true,
                })
                .then((res) => {
                  setUser(res.data.data);
                  setStatus("authenticated");
                })
                .catch(() => {
                  logout();
                });
            })
            .catch(() => {
              logout();
            });

          return;
        }

        logout();
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        status,
        user,
        callBack,
        // refresh,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
