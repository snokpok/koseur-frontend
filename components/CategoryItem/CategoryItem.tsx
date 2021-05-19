import React, { useEffect, useState } from "react";
import styles from "./CategoryItem.module.sass";
import Image from "next/image";
import { ImageLoaderFunction } from "../../commons/utils/image-loader.function";
import { Bar } from "../../commons/graphql/schema-interfaces";

export default function CategoryItem(props: { bar: Bar }) {
    const ITEM_SIZE_RATIO = 7 / 8;
    const [rightWidth, setRightWidth] = useState<number>(0);
    const [rightHeight, setRightHeight] = useState<number>(0);

    useEffect(() => {
        if (props.bar.logo) {
            setRightWidth(
                props.bar.logo.formats.thumbnail.width * ITEM_SIZE_RATIO
            );
            setRightHeight(
                props.bar.logo.formats.thumbnail.height * ITEM_SIZE_RATIO
            );
        }
    });

    return (
        <div className={styles.CategoryItem}>
            <div>{props.bar.name}</div>
            <a href="http://localhost:8080">a link</a>
            <div>{props.bar.description}</div>
            {props.bar.logo ? (
                <Image
                    loader={ImageLoaderFunction}
                    src={props.bar.logo.formats.thumbnail.url}
                    width={rightWidth}
                    height={rightHeight}
                />
            ) : null}
        </div>
    );
}
