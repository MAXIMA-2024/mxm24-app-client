import { LoadingContext } from "@/providers/loading-provider";
import { useContext } from "react";

export default function useLoading() {
  return useContext(LoadingContext);
}
