import React, {
    createRef,
    EventHandler,
    MouseEvent,
    MouseEventHandler,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import styles from "/styles/styles.module.sass";
import Head from "next/head";
import FadeInImage from "../components/FadeInImage/FadeInImage";
import { homePageData } from "../commons/mock-data/home-page";
import CategorySection from "../components/CategorySection/CategorySection";
import { GetServerSideProps, NextPageContext } from "next";
import { getBarsHomePageQueryVariables } from "../commons/graphql/qvs";
import { AxiosGenericQueryFunction } from "../commons/graphql/axios-query.function";
import { Category } from "../commons/graphql/schema-interfaces";
import Header from "../components/Header/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosArrowDropdown } from "react-icons/io";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Parallax } from "react-parallax";
import BurgerOverlay from "../components/BurgerOverlay/BurgerOverlay";
import NavbarContext from "../commons/contexts/navbar-context";
import ScreenContext from "../commons/contexts/screen-context";
import { LoadingScreen } from "../components/LoadingScreen/LoadingScreen";
import Footer from "../components/Footer/Footer";
import { FooterHomepage } from "../components/FooterHomepage/FooterHomepage";

export interface HomePageProps {
    data: {
        categories: Category[];
    };
    city?: string;
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
        route: "/",
    },
    {
        name: "Hanoi",
        route: "/#category-section",
    },
    {
        name: "Sai Gon",
        route: "/#category-section",
    },
];

export default function HomePage({ data }: HomePageProps) {
    const [dataHome, setDataHome] = useState<HomePageProps>({
        data: { categories: [] },
    });

    useEffect(() => {
        if (!data) {
            setDataHome(homePageData as HomePageProps);
        }
    }, []);

    return (
        <div>
            <BurgerOverlay dropdownItems={navbarProps} />
            <Head>
                <title>Koseur | Home</title>
                <link rel="stylesheet" />
            </Head>
            <Parallax
                bgImage="/homepage.jpg"
                strength={500}
                blur={{ min: -5, max: 5 }}
            >
                <div className={styles.HomeSection}>
                    <Header barName={"KOSEUR"} dropdownItems={navbarProps} />
                    <div
                        className={styles.BgText}
                        style={{
                            textShadow: "15px 10px 10px #000000",
                            marginTop: "10%",
                        }}
                    >
                        {"KOSEUR TOGETHER"}
                    </div>
                    <div className={styles.ArrowIconContainer}>
                        <AnchorLink href="#category-section">
                            <IoIosArrowDropdown className={styles.ArrowIcon} />
                        </AnchorLink>
                    </div>
                </div>
            </Parallax>

            <section className={styles.HomePage} id="category-section">
                <CategorySection
                    categories={data?.categories ?? dataHome.data.categories}
                />
            </section>
            <FooterHomepage />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        const res = await AxiosGenericQueryFunction(
            getBarsHomePageQueryVariables("id")
        );
        return {
            props: {
                data: res.data.data,
            },
        };
    } catch {
        return {
            props: { data: null, city: ctx.params?.city ?? null },
        };
    }
};
