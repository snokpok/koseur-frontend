import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

export default function FadeInImage(props: any) {
    const [loaded, setLoaded] = useState(false);
    const animationControls = useAnimation();
    useEffect(() => {
        if (loaded) {
            animationControls.start("visible");
        }
    }, [loaded]);
    return (
        <motion.div
            initial={"hidden"}
            animate={animationControls}
            variants={animationVariants}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            <Image {...props} onLoad={() => setLoaded(true)} />
        </motion.div>
    );
}
