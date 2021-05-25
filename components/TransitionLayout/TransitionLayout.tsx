import { useState, useEffect } from "react";
import styles from "./TransitionLayout.module.sass";

export default function TransitionLayout({
    children,
}: {
    children: React.ReactElement;
}) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("");

    useEffect(() => {
        if (children !== displayChildren) setTransitionStage("fadeOut");
    }, [children, setDisplayChildren, displayChildren]);

    return (
        <div>
            <div
                onTransitionEndCapture={() => {
                    if (transitionStage === "fadeOut") {
                        console.log("fading out");
                        setDisplayChildren(children);
                        setTransitionStage("fadeIn");
                    }
                }}
                className={`${styles.content} ${styles[transitionStage]}`}
            >
                {displayChildren}
            </div>
        </div>
    );
}
