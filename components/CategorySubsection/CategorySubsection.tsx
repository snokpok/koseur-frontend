import React from "react";
import styles from "./CategorySubsection.module.sass";
import CategoryItem, { ICategoryItem } from "../CategoryItem/CategoryItem";
import ScrollContainer from 'react-indiana-drag-scroll';

// ICategorySubsection
export interface ICategorySubsection {
    name: string;
    bars: ICategoryItem[];
}

export default function CategorySubsection(props: ICategorySubsection) {
    
    return (
        <div className={styles.CategorySubsection}>
            <div className={styles.Header}>{props.name}</div>
            <ScrollContainer className={styles.Items} horizontal = {true} vertical={false} hideScrollbars={true}>
                {props.bars.map((item: ICategoryItem) => (
                            <CategoryItem {...item} />
                        ))}
            </ScrollContainer>
            {/* old scroll
            <div className={styles.Items}>
                    {props.bars.map((item: ICategoryItem) => (
                        <CategoryItem {...item} />
                    ))}
            </div> */}
        </div>
    );
}
