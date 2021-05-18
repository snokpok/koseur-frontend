import React from "react";
import styles from "./CategorySubsection.module.sass";
import CategoryItem from "../CategoryItem/CategoryItem";
import ScrollContainer from "react-indiana-drag-scroll";
import { Bar, Category, Maybe } from "../../commons/graphql/schema-interfaces";

export default function CategorySubsection(props: { category: Category }) {
    return (
        <div className={styles.CategorySubsection}>
            <div className={styles.Header}>{props.category.name}</div>
            <ScrollContainer
                className={styles.Items}
                horizontal={true}
                vertical={false}
                hideScrollbars={true}
            >
                {props.category!.bars!.map((bar: Maybe<Bar>) => (
                    <CategoryItem bar={bar as Bar} />
                ))}
            </ScrollContainer>
        </div>
    );
}
