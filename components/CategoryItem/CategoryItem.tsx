import React, { useEffect, useState } from "react";
import styles from "./CategoryItem.module.sass";
import Image from "next/image";
import { ImageLoaderFunction } from "../../commons/utils/image-loader.function";
import { Bar } from "../../commons/graphql/schema-interfaces";
import FadeInImage from "../FadeInImage/FadeInImage";
import { imagePath, imagePathServer } from "../../commons/utils/image-path.function";
import { useRouter } from "next/router";

export interface CategoryItemProps {
    bar: Bar;
    showDescription: boolean;
}

export interface NavbarProps {
    dropdownItems: { name: string; route: string }[];
}
export const navbarProps = [
    {
        name: "Home",
        route: "/",
    },
    {
        name: "About us",
        route: "/about",
    },
];

export default function CategoryItem({
    bar,
    showDescription,
}: CategoryItemProps) {
    const ITEM_SIZE_RATIO = 9 / 8;
    const [rightWidth, setRightWidth] = useState<number>(0);
    const [rightHeight, setRightHeight] = useState<number>(0);
    const router = useRouter();

    useEffect(() => {
        if (bar.logo) {
            setRightWidth(bar.logo.formats.thumbnail.width * ITEM_SIZE_RATIO);
            setRightHeight(bar.logo.formats.thumbnail.height * ITEM_SIZE_RATIO);
        }
    });

    return (
        <div
            className={styles.BarCover}
            style={{
                width: "100%",
                backgroundImage: `url(${imagePathServer(bar, "small")})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            onClick={(e) => {
                e.preventDefault();
                router.push(`/${bar.id}`);
            }}
        >
            <div className={styles.CategoryItem}>
                {showDescription ? (
                    <div className={styles.BarInfo}>
                        <div className={styles.BarInfoName}>{bar.name}</div>
                        <hr className={styles.BarInfoDivider} />
                        <div className={styles.BarInfoDes}>
                            {bar.description}
                        </div>
                    </div>
                ) : null}
                <div
                    className={styles.LogoContainer}
                    style={
                        showDescription
                            ? {
                                  animation: "none !important",
                              }
                            : {}
                    }
                >
                    {bar.logo ? (
                        <Image
                            //loader={ImageLoaderFunction}
                            src={`/${
                                bar.logo.formats.thumbnail.name.split(
                                    "thumbnail_"
                                )[1]
                            }`}
                            width={rightWidth}
                            height={rightHeight}
                            className={styles.Logo}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}
