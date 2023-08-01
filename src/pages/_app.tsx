import "@/styles/globals.css";
import type { AppProps } from "next/app";
import BoschHeader from "../components/BoschHeader";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const location = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <BoschHeader />
      {React.cloneElement(<Component {...pageProps} />, {
        key: location,
      })}
    </AnimatePresence>
  );
}
