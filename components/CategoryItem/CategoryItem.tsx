import React, { useEffect, useState } from "react";
import styles from "./CategoryItem.module.sass";
import Image from "next/image";
import { ImageLoaderFunction } from "../../commons/utils/image-loader.function";
import { Bar } from "../../commons/graphql/schema-interfaces";
import FadeInImage from "../FadeInImage/FadeInImage";

export default function CategoryItem({bar}: { bar: Bar }) {
    const ITEM_SIZE_RATIO = 7 / 8;
    const [rightWidth, setRightWidth] = useState<number>(0);
    const [rightHeight, setRightHeight] = useState<number>(0);
    const imagePath = `/${bar.name}-cover.jpg`;
    console.log(imagePath);

    useEffect(() => {
        if (bar.logo) {
            setRightWidth(
                bar.logo.formats.thumbnail.width * ITEM_SIZE_RATIO
            );
            setRightHeight(
                bar.logo.formats.thumbnail.height * ITEM_SIZE_RATIO
            );
        }
    });

    return (
        <div className={styles.CategoryItem} style={{backgroundImage: `url(${imagePath})`}}>
            {/* <FadeInImage
                loader={ImageLoaderFunction}
                // src={bar.logo?.formats.thumbnail.url ?? null}
                src="/politeco-cover.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                
            /> */}
            <div className={styles.BarInfo} >
            
                <div className={styles.BarInfoName}>{bar.name}</div>
                <hr className={styles.BarInfoDivider} />
                <a className={styles.BarLink} href="http://localhost:8080">a link</a>
                <div className={styles.BarInfoDes}>{bar.description}</div>
            </div>
            <div className={styles.Logo}>
                {bar.logo ? (
                    <Image
                        loader={ImageLoaderFunction}
                        src={bar.logo.formats.thumbnail.url}
                        width={rightWidth}
                        height={rightHeight}
                    />
                ) : null}
            </div>
        </div>
    );
}
