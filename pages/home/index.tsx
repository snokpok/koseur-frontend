import React, {
    EventHandler,
    MouseEvent,
    MouseEventHandler,
    useEffect,
    useState,
} from "react";
import styles from "../../styles/styles.module.sass";
import Head from "next/head";
import FadeInImage from "../../components/FadeInImage/FadeInImage";
import { homePageData } from "../../commons/mock-data/home-page";
import { homePageHanoiData } from "../../commons/mock-data/home-page-hanoi";
import { homePageHCMData } from "../../commons/mock-data/home-page-hcm";
import CategorySection from "../../components/CategorySection/CategorySection";
import { GetServerSideProps, NextPageContext } from "next";
import { getBarsHomePageQueryVariables } from "../../commons/graphql/qvs";
import { AxiosGenericQueryFunction } from "../../commons/graphql/axios-query.function";
import { Category } from "../../commons/graphql/schema-interfaces";
import Header from "../../components/Header/Header";
import Link from "next/link";
import { useRouter } from "next/router";

export interface HomePageProps {
    data: {
        categories: Category[];
    };
    city?: string;
}

export default function HomePage({ data, city }: HomePageProps) {
    const sideLength = 100;
    const [dataHome, setDataHome] = useState<HomePageProps>({
        data: { categories: [] },
    });
    const router = useRouter();

    useEffect(() => {
        if (!data) {
            if (city === "Hanoi")
                setDataHome(homePageHanoiData as HomePageProps);
            else if (city === "HCM")
                setDataHome(homePageHCMData as HomePageProps);
            else setDataHome(homePageData as HomePageProps);
        }
    }, []);

    const handleLocalePress: (
        city: string
    ) => MouseEventHandler<HTMLDivElement> = (city: string) => {
        return (e) => {
            router.push(`/home?city=${city}`, undefined, {
                scroll: false,
                shallow: true,
            });
        };
    };
    return (
        <>
            <Head>
                <title>Koseur | Home</title>
                <link rel="stylesheet" />
            </Head>

            <div className={styles.HomeSection}>
                <FadeInImage
                    src="/homepage.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />

                <Header barName={"KOSEUR"} />
                <p className={styles.BgText}>{"KOSEUR TOGETHER"}</p>
            </div>

            <div className={styles.HomePage}>
                <div className={styles.IntroHomePage}>
                    <div
                        className={styles.Locale}
                        onClick={handleLocalePress("Hanoi")}
                    >
                        Hanoi
                    </div>
                    <div
                        className={styles.Locale}
                        onClick={handleLocalePress("HCM")}
                    >
                        HCMC
                    </div>
                </div>
                <CategorySection
                    categories={data?.categories ?? dataHome.data.categories}
                />
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        const res = await AxiosGenericQueryFunction(
            getBarsHomePageQueryVariables("id", {
                city: ctx.query.city,
            })
        );
        return {
            props: {
                data: res.data,
                city: ctx.query?.city,
            },
        };
    } catch {
        return {
            props: { data: null, city: ctx.query.city },
        };
    }
};
