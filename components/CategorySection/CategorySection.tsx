import React from "react";
import { Category } from "../../commons/graphql/schema-interfaces";
import CategorySubsection from "../CategorySubsection/CategorySubsection";
import styles from "./CategorySection.module.sass";

export default function CategorySection(props: { categories: Category[] }) {
    return (
        <div className={styles.CategorySection}>
            {props.categories.map((category: Category) => (
                <CategorySubsection category={category} />
            ))}
        </div>
    );
}
