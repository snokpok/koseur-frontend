import React, { useCallback, useState } from "react";
import styles from "./CategorySubsection.module.sass";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Bar, Category, Maybe } from "../../commons/graphql/schema-interfaces";
import Carousel from "nuka-carousel";

export default function CategorySubsection(props: { category: Category }) {
    const buttonStyle = {
        borderRadius: "50%",
        width: "4rem",
        height: "4rem",
        opacity: 0.7,
        backgroundColor: "black",
    };

    return (
        <div className={styles.CategorySubsection}>
            <div className={styles.Header}>{props.category.name}</div>

            <Carousel
                disableEdgeSwiping={true}
                slidesToShow={2}
                autoplay={true}
                cellSpacing={50}
                renderBottomCenterControls={null}
                defaultControlsConfig={{
                    nextButtonText: ">",
                    prevButtonText: "<",
                    nextButtonStyle: buttonStyle,
                    prevButtonStyle: buttonStyle,
                }}
                style={{
                    overflow: "auto",
                }}
            >
                {props.category!.bars!.map((bar: Maybe<Bar>) => (
                    <CategoryItem bar={bar as Bar} />
                ))}
            </Carousel>
        </div>
    );
}
