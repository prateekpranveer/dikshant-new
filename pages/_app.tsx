import React from "react";

import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router, { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "../store/store";

interface Prime {
  prime: string;
  setprime: React.Dispatch<React.SetStateAction<string>>;
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    NProgress.configure({
      template: `
        <div class="bar" role="bar">
          <div class="peg fixed-border" style="box-shadow: 0 0 10px var(--nprogress-color), 0 0 5px var(--nprogress-color)"></div>
        </div>
      `,
    });

    Router.events.on("routeChangeStart", NProgress.start);
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);

    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
    };
  }, []);

  return (
    <>
      <Head>
        <title>STUDIO | DIKSHANT</title>
        <meta property="og:image" content="/next.svg" />
        <link rel="icon" href="/head.png" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
