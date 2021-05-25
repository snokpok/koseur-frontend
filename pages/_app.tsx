import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import ScreenContext, { IScreenMeta } from "../commons/contexts/screen-context";
import { screenSizes } from "../commons/utils/screen-sizes";
import NavbarContext, { INavbarMeta } from "../commons/contexts/navbar-context";
import { LoadingScreen } from "../components/LoadingScreen/LoadingScreen";
import { MAXIMUM_LOADING_TIME } from "../commons/constants/transitions";
import TransitionLayout from "../components/TransitionLayout/TransitionLayout";

function MyApp({ Component, pageProps }: AppProps) {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [screenMeta, setScreenMeta] = useState<IScreenMeta>({
        size: {},
        isSmall: false,
        isLoading,
        setLoading,
    });
    const [isOpen, setOpen] = useState<boolean>(false);
    const [navbarMeta, setNavbarMeta] = useState<INavbarMeta>({
        isOpen,
        setOpen,
    });

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            console.log("loaded!", isLoading);
        }, MAXIMUM_LOADING_TIME);
    }, []);

    useEffect(() => {
        setScreenMeta({
            size: {
                w: window.screen.availWidth,
                h: window.screen.availHeight,
            },
            isSmall: window.screen.availWidth <= screenSizes["ip678p"].w,
            isLoading,
            setLoading,
        });
    }, []);

    return (
        <NavbarContext.Provider value={{ isOpen, setOpen }}>
            <ScreenContext.Provider value={screenMeta}>
                {isLoading ? <LoadingScreen /> : null}
                <TransitionLayout>
                    <Component {...pageProps} />
                </TransitionLayout>
            </ScreenContext.Provider>
        </NavbarContext.Provider>
    );
}

export default MyApp;
