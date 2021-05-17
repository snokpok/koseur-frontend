import React from "react";
import styles from "../../styles/styles.module.sass";
import Head from "next/head";
import FadeInImage from "../../components/FadeInImage/FadeInImage";
import CategorySection from "../../components/CategorySection/CategorySection";
import { dataCategory } from "../../commons/home-page-data";
import { NextPageContext } from "next";
import { getBarsHomePage} from "../../commons/graphql/queries";
import { ICategorySubsection } from "../../components/CategorySubsection/CategorySubsection";
import { AxiosGenericQueryFunction } from "../../commons/graphql/axios-query.function";

export interface HomePageProps {
    data: {
        categories: ICategorySubsection[]
    }
}

export default function HomePage({data}: HomePageProps) {
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
                <CategorySection data={data?.categories ?? dataCategory} />
            </div>
        </>
    );
}

HomePage.getInitialProps = async (ctx: NextPageContext) => {
    try {
        const res = await AxiosGenericQueryFunction(getBarsHomePage)
        return res.data
    } catch {
        return {data: null}
    }
}
