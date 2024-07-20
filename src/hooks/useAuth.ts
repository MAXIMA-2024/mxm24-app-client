import { AuthContext } from "@/providers/auth-provider";
import { useContext } from "react";

export default function useAuth() {
  return useContext(AuthContext);
}
