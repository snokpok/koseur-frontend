import React from "react";
import styles from "../../styles/styles.module.sass";
import Head from "next/head";
import FadeInImage from "../../components/FadeInImage/FadeInImage";
import { homePageData } from "../../commons/mock-data/home-page";
import CategorySection from "../../components/CategorySection/CategorySection";
import { NextPageContext } from "next";
import { getBarsHomePageQueryVariables } from "../../commons/graphql/qvs";
import { AxiosGenericQueryFunction } from "../../commons/graphql/axios-query.function";
import { Category } from "../../commons/graphql/schema-interfaces";

export interface HomePageProps {
    data: {
        categories: Category[];
    };
}

export default function HomePage({ data }: HomePageProps) {
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
                <CategorySection categories={data?.categories ?? homePageData.data.categories} />
            </div>
        </>
    );
}

HomePage.getInitialProps = async (ctx: NextPageContext) => {
    try {
        const res = await AxiosGenericQueryFunction(
            getBarsHomePageQueryVariables("id")
        );
        return res.data;
    } catch {
        return { data: null };
    }
};
