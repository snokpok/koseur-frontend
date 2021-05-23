import React, { ReactElement, useCallback, useEffect, useState } from "react";
import styles from "./CategorySubsection.module.sass";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Bar, Category, Maybe } from "../../commons/graphql/schema-interfaces";
import Carousel from "nuka-carousel";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { screenSizes } from "../../commons/utils/screen-sizes";

export default function CategorySubsection(props: { category: Category }) {
    const [numSlides, setNumSlides] = useState<number>(2);
    const [smallScreen, setSmallScreen] = useState<boolean>(false);

    const handleCenterControl = (
        slideCallback: () => void,
        controlElement: JSX.Element
    ) => {
        if (props.category!.bars!.length > 2 && !smallScreen)
            return (
                <div
                    style={{ fontSize: 30, cursor: "pointer" }}
                    onClick={slideCallback}
                >
                    {controlElement}
                </div>
            );
    };

    useEffect(() => {
        if (window.screen.availWidth < screenSizes["ip678p-w"]) {
            setNumSlides(1);
            setSmallScreen(true);
        }
    }, []);

    return (
        <div className={styles.CategorySubsection}>
            <div className={styles.Header}>{props.category.name}</div>

            <Carousel
                disableEdgeSwiping={true}
                slidesToShow={numSlides}
                dragging={props.category!.bars!.length > 2}
                cellSpacing={50}
                renderBottomCenterControls={null}
                renderCenterRightControls={({ nextSlide }) =>
                    handleCenterControl(
                        nextSlide,
                        <IoIosArrowDropright className={styles.ArrowIcon} />
                    )
                }
                renderCenterLeftControls={({ previousSlide }) =>
                    handleCenterControl(
                        previousSlide,
                        <IoIosArrowDropleft className={styles.ArrowIcon} />
                    )
                }
                style={{
                    overflow: "auto",
                }}
            >
                {props.category!.bars!.map((bar: Maybe<Bar>) => (
                    <CategoryItem
                        bar={bar as Bar}
                        showDescription={!smallScreen}
                    />
                ))}
            </Carousel>
        </div>
    );
}
