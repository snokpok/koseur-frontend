import React, { ReactElement, useContext, useEffect } from "react";
import styles from "./LoadingScreen.module.sass";
import { Spinner } from "react-bootstrap";
import Image from "next/image";
import ScreenContext from "../../commons/contexts/screen-context";
import { motion, useAnimation } from "framer-motion";
import {
    LOGO_SPLASH_WH,
    MAXIMUM_LOADING_TIME,
    OPACITY_PREFIRE,
} from "../../commons/constants/transitions";

export interface LoadingScreenProps {
    isLoading: boolean;
}

export function LoadingScreen(): ReactElement | null {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const controls = useAnimation();

    useEffect(() => {
        setTimeout(() => {
            controls.start({
                opacity: 0,
            });
        }, MAXIMUM_LOADING_TIME - OPACITY_PREFIRE);
    });

    return (
        <motion.div className={styles.LoadingScreen} animate={controls}>
            <motion.div initial="hidden" animate="visible" variants={variants}>
                <Image
                    src="/logo.png"
                    width={LOGO_SPLASH_WH}
                    height={LOGO_SPLASH_WH}
                />
            </motion.div>
            <Spinner
                animation="grow"
                variant="dark"
                style={{ width: 400, height: 300 }}
            />
        </motion.div>
    );
}
