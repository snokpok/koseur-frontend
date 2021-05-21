import React, { useCallback, useState } from "react";
import styles from "./CategorySubsection.module.sass";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Bar, Category, Maybe } from "../../commons/graphql/schema-interfaces";
import Carousel from "nuka-carousel";
import {IoIosArrowDropright, IoIosArrowDropleft} from 'react-icons/io'

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
                renderCenterRightControls={
                    ({nextSlide}) => {
                        return <div style={{fontSize: 30, cursor: "pointer"}} onClick={nextSlide}>
                            <IoIosArrowDropright className={styles.ArrowIcon}/>
                        </div>
                    }
                }
                renderCenterLeftControls={
                    ({previousSlide}) => {
                        return <div style={{fontSize: 30, cursor: "pointer"}} onClick={previousSlide}>
                            <IoIosArrowDropleft className={styles.ArrowIcon}/>
                        </div>
                    }
                }
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
