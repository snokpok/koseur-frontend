import React from "react";
import styles from "../../styles/styles.module.sass";
import Head from "next/head";
import FadeInImage from "../../components/FadeInImage/FadeInImage";
import CategorySection from "../../components/CategorySection/CategorySection";
import { dataCategory } from "../../commons/home-page-data";

export default function HomePage() {
    const sideLength = 100;

    return (
        <>
            <Head>
                <title>Koseur | Home</title>
                <link rel="stylesheet" />
            </Head>
            <div className={styles.HomePage}>
                <FadeInImage
                    src="/logo.png"
                    width={sideLength}
                    height={sideLength}
                />
                <div className={styles.IntroHomePage}>Styles</div>
                <CategorySection data={dataCategory} />
            </div>
        </>
    );
}
