import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { IScreenMeta, ScreenContext } from "../commons/contexts/screen-context";
import { screenSizes } from "../commons/utils/screen-sizes";
import NavbarContext, { INavbarMeta } from "../commons/contexts/navbar-context";

function MyApp({ Component, pageProps }: AppProps) {
    const [screenMeta, setScreenMeta] = useState<IScreenMeta>({
        size: {},
        isSmall: false,
    });
    const [isOpen, setOpen] = useState<boolean>(false);
    const [navbarMeta, setNavbarMeta] = useState<INavbarMeta>({
        isOpen,
        setOpen,
    });

    useEffect(() => {
        setScreenMeta({
            size: {
                w: window.screen.availWidth,
                h: window.screen.availHeight,
            },
            isSmall: window.screen.availWidth <= screenSizes["ip678p"].w,
        });
    }, []);

    return (
        <NavbarContext.Provider value={{ isOpen, setOpen }}>
            <ScreenContext.Provider value={screenMeta}>
                <Component {...pageProps} />
            </ScreenContext.Provider>
        </NavbarContext.Provider>
    );
}

export default MyApp;
