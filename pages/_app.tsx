import "../styles/globals.css";
// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
    let router = useRouter();
    return (
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
        </AnimatePresence>
    );
}

export default MyApp;
