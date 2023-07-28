import "@/styles/globals.css";
import type { AppProps } from "next/app";
import BoschHeader from "./components/BoschHeader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BoschHeader />
      <Component {...pageProps} />
    </>
  );
}
