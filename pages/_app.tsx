import React from "react";
import type { AppProps } from "next/app";

function Application({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Application;
