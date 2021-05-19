import React, { useCallback, useState } from "react";
import styles from "./CategorySubsection.module.sass";
import CategoryItem from "../CategoryItem/CategoryItem";
import ScrollContainer from "react-indiana-drag-scroll";
import { Bar, Category, Maybe } from "../../commons/graphql/schema-interfaces";
import Carousel from "nuka-carousel";

export default function CategorySubsection(props: { category: Category }) {
    const buttonStyle = {
        borderRadius: "50%",
        width: "2rem",
    };

    return (
        <div className={styles.CategorySubsection}>
            <div className={styles.Header}>{props.category.name}</div>

            <Carousel
                disableEdgeSwiping={true}
                slidesToShow={2}
                autoplay={true}
                cellSpacing={30}
                renderBottomCenterControls={null}
                defaultControlsConfig={{
                    nextButtonText: ">",
                    prevButtonText: "<",
                    nextButtonStyle: buttonStyle,
                    prevButtonStyle: buttonStyle,
                }}
            >
                {props.category!.bars!.map((bar: Maybe<Bar>) => (
                    <CategoryItem bar={bar as Bar} />
                ))}
            </Carousel>
        </div>
    );
}
