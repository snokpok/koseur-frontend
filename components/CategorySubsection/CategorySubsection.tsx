import React, { useRef } from "react";
import styles from "./CategorySubsection.module.sass";
import CategoryItem, { ICategoryItem } from "../CategoryItem/CategoryItem";
import {motion} from 'framer-motion'

export interface ICategorySubsection {
    name: string;
    items: ICategoryItem[];
}

export default function CategorySubsection(props: ICategorySubsection) {
    const dragContainerRef = useRef(null)

    return (
        <div className={styles.CategorySubsection}>
            <div className={styles.Header}>{props.name}</div>
            <motion.div ref={dragContainerRef}>
                <motion.div className={styles.Items} drag='x' dragConstraints={dragContainerRef} dragElastic={0.8}>
                    {props.items.map((item: ICategoryItem) => (
                        <CategoryItem {...item} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
