import React, { useEffect, useState } from "react";
import styles from "./HorizontalScroll.module.sass";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import CategoryItem, { ICategoryItem } from "../CategoryItem/CategoryItem";

// export type TCategorySection = ICategorySubsection[];
const test_image = 'https://images.foody.vn/res/g95/947809/s800/foody-telephone-bar-947809-202-637013614632295696.jpg';

// arrows for left/right scroll
interface ArrowType{
    text: string;
}
function Arrow (props: ArrowType) {
    return (
        <div> {props.text} </div>
    );
};

const ArrowLeft: ArrowType = {text: "<"};
let ArrowRight: ArrowType = {text: ">"};

// Icategory
export interface ICategorySubsection {
    name: string;
    bars: ICategoryItem[];
}

// horizontal list
export default function HorizontalScroll(props: ICategorySubsection){
    return(
        <div>
            <ScrollMenu>
            data = {props}
            wheel = {false}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            </ScrollMenu>
        </div>
    );
}


