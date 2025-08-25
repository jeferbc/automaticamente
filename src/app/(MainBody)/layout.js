"use client";
import getConfig from "next/config";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Customizer from "../../containers/customizer";
import "../../index.scss";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";



const { publicRuntimeConfig = {} } = getConfig() || {};

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

function MyFunctionComponent({ children }) {
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    // Tap to Top Scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500) setGoingUp(true);
      else setGoingUp(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const tapToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <>
      <Head>
        <title>Unice</title>
      </Head>
      <>{children}</>
      <div
        className="tap-top"
        style={goingUp ? { display: "block" } : { display: "none" }}
        onClick={tapToTop}
      >
        <div>
          <i className="fa fa-angle-double-up"></i>
        </div>
      </div>
      <div className="buy-now d-block">
        <a
          href="https://1.envato.market/GjA3vm"
          target="_blank"
          className="p-2"
        >
          <i className="fa fa-shopping-cart text-white"></i>
        </a>
      </div>
    </>
  );
}

export default function MyApp({ children }) {
const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={children.dehydratedState}>
        <div>
          <MyFunctionComponent>{children}</MyFunctionComponent>
          <Customizer />
          <ToastContainer />
        </div>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
