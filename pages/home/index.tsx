import React, { useEffect , useState } from "react";
import styles from "../../styles/styles.module.sass";
import Head from "next/head";
import FadeInImage from "../../components/FadeInImage/FadeInImage";
import { homePageData } from "../../commons/mock-data/home-page";
import { homePageHanoiData } from "../../commons/mock-data/home-page-hanoi";
import { homePageHCMData } from "../../commons/mock-data/home-page-hcm";
import CategorySection from "../../components/CategorySection/CategorySection";
import { NextPageContext } from "next";
import { getBarsHomePageQueryVariables } from "../../commons/graphql/qvs";
import { AxiosGenericQueryFunction } from "../../commons/graphql/axios-query.function";
import { Category } from "../../commons/graphql/schema-interfaces";

export interface HomePageProps {
    data: {
        categories: Category[];
    },
    city?: string
}

export default function HomePage({ data, city }: HomePageProps) {
    const sideLength = 100;
    const [dataHome, setDataHome] = useState({data: {categories: {}}})

    useEffect(() => {
        switch (city) {
            case "Hanoi":
                setDataHome(homePageHanoiData)
            case "HCM":
                setDataHome(homePageHCMData)
            default: 
                setDataHome(homePageData)
        }
    }, [])

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
                <CategorySection
                    categories={
                        data?.categories 
                            ?? dataHome.data.categories
                    }
                />
            </div>
        </>
    );
}

HomePage.getInitialProps = async (ctx: NextPageContext) => {
    try {
        const res = await AxiosGenericQueryFunction(
            getBarsHomePageQueryVariables("id", {city: ctx.query.city})
        );
        return res.data;
    } catch {
        return { data: null, city: ctx.query.city };
    }
};
