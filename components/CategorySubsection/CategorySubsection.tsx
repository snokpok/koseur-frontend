import React, { useContext, useEffect, useState } from "react";
import styles from "./CategorySubsection.module.sass";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Bar, Category, Maybe } from "../../commons/graphql/schema-interfaces";
import Carousel from "nuka-carousel";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import ScreenContext from "../../commons/contexts/screen-context";

export interface CategorySubsectionProps {
    category: Category;
}

export default function CategorySubsection(props: CategorySubsectionProps) {
    const [numSlides, setNumSlides] = useState<number>(2);

    const screenMeta = useContext(ScreenContext);

    const handleCenterControl = (
        slideCallback: () => void,
        controlElement: JSX.Element
    ) => {
        if (props.category!.bars!.length > 2 && !screenMeta.isSmall)
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
        if (screenMeta.isSmall) {
            setNumSlides(1);
        }
    }, []);

    return (
        <div className={styles.CategorySubsection}>
            <div className={styles.Header}>{props.category.name}</div>
            <Carousel
                disableEdgeSwiping={true}
                slidesToShow={numSlides}
                dragging={props.category!.bars!.length > 2}
                swiping={screenMeta.isSmall}
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
            >
                {props.category!.bars!.map((bar: Maybe<Bar>) => (
                    <CategoryItem
                        bar={bar as Bar}
                        showDescription={!screenMeta.isSmall}
                    />
                ))}
            </Carousel>
            <div className={styles.breakLine}/>
        </div>
    );
}
