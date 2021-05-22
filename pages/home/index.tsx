import React, {
    createRef,
    EventHandler,
    MouseEvent,
    MouseEventHandler,
    useEffect,
    useRef,
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
import { IoIosArrowDropdown } from "react-icons/io";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Parallax } from "react-parallax";

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
    const [scrollOffset, setScrollOffset] = useState<number>(0)
    const homeSectionRef: React.RefObject<HTMLDivElement> = useRef(null);
    const categorySection: React.RefObject<HTMLDivElement> = useRef(null);
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

    //    const handleLocalePress: (
    //        city: string
    //    ) => MouseEventHandler<HTMLDivElement> = (city: string) => {
    //        return (e) => {
    //            router.push(`/home?city=${city}`, undefined, {
    //                scroll: false,
    //                shallow: true,
    //            });
    //        };
    //    };

    // const sectionBreakpoint = 10;
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         const currentScrollPos = window.pageYOffset;
    //         if (scrollOffset >= sectionBreakpoint) {
    //             document!.querySelector("html")!.style.overflowY = "auto";
    //         } else {
    //             document!.querySelector("html")!.style.overflowY = "hidden";
    //         }
    //     });
    // }, []);

    return (
        <>
            <Head>
                <title>Koseur | Home</title>
                <link rel="stylesheet" />
            </Head>

            <Parallax bgImage="/homepage.jpg" strength={500} blur={{min: -5, max: 5}}>
                <div className={styles.HomeSection} ref={homeSectionRef}>
                    <Header barName={"KOSEUR"} />
                    <p className={styles.BgText} style={{textShadow: "15px 10px 10px #000000"}}>{"KOSEUR TOGETHER"}</p>
                    <div className={styles.ArrowIconContainer}>
                        <AnchorLink href="#locale">
                            <IoIosArrowDropdown className={styles.ArrowIcon} />
                        </AnchorLink>
                    </div>
                </div>
            </Parallax>

            <section
                id="locale"
                className={styles.HomePage}
                ref={categorySection}
            >
                <div className={styles.IntroHomePage}>
                    <div className={styles.Locale}>Hanoi</div>
                    <div className={styles.Locale}>Saigon</div>
                </div>
                <CategorySection
                    categories={data?.categories ?? dataHome.data.categories}
                />
            </section>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    //    try {
    //        const res = await AxiosGenericQueryFunction(
    //            getBarsHomePageQueryVariables("id", {
    //                city: ctx.query.city,
    //            })
    //        );
    //        return {
    //            props: {
    //                data: res.data,
    //                city: ctx.query?.city,
    //            },
    //        };
    //    } catch {
    return {
        props: { data: null, city: ctx.params?.city ?? null },
    };
};
//};
