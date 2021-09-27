import React from "react";
import Header from "../../components/Header/Header";
import Image from "next/image";
import styles from "../../styles/styles.module.sass";
import FadeInImage from "../../components/FadeInImage/FadeInImage";
import { AxiosGenericQueryFunction } from "../../commons/graphql/axios-query.function";
import { getBarById } from "../../commons/graphql/qvs";
import { ImageLoaderFunction } from "../../commons/utils/image-loader.function";
import { barPageData } from "../../commons/mock-data/bar-page";
import { Drink, Bar } from "../../commons/graphql/schema-interfaces";
import { imagePath } from "../../commons/utils/image-path.function";
import { Parallax } from "react-parallax";
import Carousel from "nuka-carousel";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoIosArrowDropdown } from "react-icons/io";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { GetServerSideProps } from "next";
import BurgerOverlay from "../../components/BurgerOverlay/BurgerOverlay";

export interface BarPageProps {
    data: {
        bar: Bar;
    };
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
];

export default function BarPage({ data: { bar } }: BarPageProps) {
    return (
        <div className={styles.ProfileContainer} id="FrontPage">
            <BurgerOverlay />
            <Parallax
                bgImage={`${imagePath(bar, 2)}`}
                strength={300}
                blur={{ min: -5, max: 5 }}
            >
                <div className={styles.ProfileSection}>
                    <Header barName={"KOSEUR"} dropdownItems={navbarProps} />
                    <p className={styles.BgText}>
                        {bar?.contents?.BgText ?? null}
                    </p>

                    <div className={styles.ArrowIconContainer}>
                        <AnchorLink href="#target">
                            <IoIosArrowDropdown className={styles.ArrowIcon} />
                        </AnchorLink>
                    </div>
                </div>
            </Parallax>

            <div className={styles.ProfileSectionOther} id="target">
                <div className={styles.AboutUs}>
                    <div className={styles.AboutUsSection1}>
                        <video
                            autoPlay
                            loop
                            muted
                            className={styles.BackgroundVideo}
                        >
                            <source src="/21-gam.mp4" type="video/mp4" />
                        </video>

                        <div className={styles.AboutUsTitle}>
                            <p>{bar?.contents?.AboutUs.AboutUsTitle[0]}</p>
                            <p>{bar?.contents?.AboutUs.AboutUsTitle[1]}</p>
                            <br />
                            <div className={styles.AboutUsText}>
                                <p>{bar?.contents?.AboutUs.AboutUsText}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.AboutUsSection2}>
                        <div className={styles.Drink}>
                            <Parallax
                                bgImage={`${imagePath(bar, 3)}`}
                                strength={750}
                                blur={{ min: -5, max: 5 }}
                                style={{
                                    width: "40%",
                                    height: "80vh",
                                }}
                            />

                            <div className={styles.DrinkTitle}>
                                <p>{bar?.contents.Drink.DrinkTitle}</p>
                                <br />
                                <div className={styles.AboutUsText}>
                                    <p>{bar?.contents.Drink.AboutUsText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.ProfileSectionOther}>
                <Menu bar={bar} />

                <div className={styles.Tag}>
                    <p>Tag Along</p>
                    <a
                        href="https://www.instagram.com/21gamofhanoi/"
                        style={{
                            textDecoration: "underline",
                            fontWeight: "bold",
                        }}
                    >
                        @KoseurTogether
                    </a>
                </div>

                <Carousel
                    className={styles.BarCarousel}
                    slidesToShow={5}
                    renderCenterRightControls={null}
                    renderCenterLeftControls={null}
                >
                    {[...Array(5).keys()].map((i) => (
                        <img
                            src={`/21-gam-${i + 1}.jpg`}
                            className={styles.FooterImg}
                        />
                    ))}
                </Carousel>
            </div>
            <Footer
                logoLink={"/21gam-logo.jpg"}
                address="26 Truong Han Sieu, Tran Hung Dao, Hoan Kiem, Ha Noi"
                addressLink="https://www.google.com/maps/place/21Gam/@21.0200633,105.846649,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab391c803bb3:0xa46cb5a3e8f7e5e4!8m2!3d21.0200583!4d105.8488377"
                phoneNo="+84988111121"
            />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const barID = context.params!.barID ?? null;
    try {
        const res = await AxiosGenericQueryFunction(
            getBarById(Number.parseInt(barID as string, 10))
        );
        return {
            props: res.data,
        };
    } catch {
        return {
            props: { ...barPageData },
        };
    }
};
