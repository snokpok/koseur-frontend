import React, { useEffect, useState } from "react";
import styles from "./CategoryItem.module.sass";
import Image from 'next/image'
import { ImageLoaderFunction } from "../../commons/utils/image-loader.function";

export interface ICategoryItem {
    name: string;
    description: string;
    logo?: {
        formats: {
            thumbnail: {
                url: string
                width: number
                height: number
            }
        }
    }
}

export default function CategoryItem(props: ICategoryItem) {
    const ITEM_SIZE_RATIO = 7/8
    const [rightWidth, setRightWidth] 
        = useState<number>(0)
    const [rightHeight, setRightHeight] 
        = useState<number>(0)

    useEffect(() => {
        if (props.logo) {
            setRightWidth(props.logo.formats.thumbnail.width * ITEM_SIZE_RATIO)
            setRightHeight(props.logo.formats.thumbnail.height * ITEM_SIZE_RATIO)
        }
    })

    return (
            <div className={styles.CategoryItem}>
                <div>{props.name}</div>
                <div>{props.description}</div>
                {
                    props.logo
                        ? (
                        <Image
                            loader={ImageLoaderFunction}
                            src={props.logo.formats.thumbnail.url}
                            width={rightWidth}
                            height={rightHeight}
                        />) : null
                }
            </div>
    );
}
