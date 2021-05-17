import React from "react";
import styles from "./CategoryItem.module.sass";

export interface ICategoryItem {
    title: string;
    brief: string;
}

export default function CategoryItem(props: ICategoryItem) {
    return (
            <div className={styles.CategoryItem}>
                <div>{props.title}</div>
                <div>{props.brief}</div>
            </div>
    );
}
