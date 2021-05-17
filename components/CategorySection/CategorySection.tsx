import React from "react";
import styles from "./CategorySection.module.sass";
import CategorySubsection, {
    ICategorySubsection,
} from "../CategorySubsection/CategorySubsection";

export type TCategorySection = ICategorySubsection[];

export default function CategorySection(props: { data: TCategorySection }) {
    return (
            <div className={styles.CategorySection}>
                {props.data.map((subsectionData: ICategorySubsection) => (
                    <CategorySubsection {...subsectionData} />
                ))}
            </div>
    );
}
