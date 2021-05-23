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

export interface BarPageProps {
    data: {
        bar: Bar;
    };
}

export default function BarPage({ data: { bar } }: BarPageProps) {
    return (
        <div className={styles.ProfileContainer} id="FrontPage">
            <Parallax
                bgImage="/background.jpeg"
                strength={300}
                blur={{ min: -5, max: 5 }}
            >
                <div className={styles.ProfileSection}>
                    <Header barName={bar.name!} />
                    <p className={styles.BgText}>{bar.contents.BgText}</p>

                    <div className={styles.ArrowIconContainer}>
                        <AnchorLink href="#target">
                            <IoIosArrowDropdown className={styles.ArrowIcon} />
                        </AnchorLink>
                    </div>
                </div>
            </Parallax>

            <div className={styles.ProfileSectionOther} id="target">
                <div className={styles.AboutUs}>
                    {/* <Image
                        // loader={ImageLoaderFunction}
                        src={"/bartender.jpg"}
                        width={600}
                        height={900}
                    /> */}

                    <video
                        autoPlay
                        loop
                        muted
                        className={styles.BackgroundVideo}
                    >
                        <source src="/21-gam.mp4" type="video/mp4" />
                    </video>

                    <div className={styles.AboutUsTitle}>
                        <p>{bar.contents.AboutUs.AboutUsTitle[0]}</p>
                        <p>{bar.contents.AboutUs.AboutUsTitle[1]}</p>
                        <br />
                        <div className={styles.AboutUsText}>
                            <p>{bar.contents.AboutUs.AboutUsText}</p>
                        </div>
                    </div>

                    <div className={styles.Drink}>
                        <Parallax
                            bgImage="/drink_1.jpg"
                            strength={350}
                            blur={{ min: -5, max: 5 }}
                            style={{
                                width: "40%",
                                height: 900,
                                float: "right",
                            }}
                        />

                        <div className={styles.DrinkTitle}>
                            <p>{bar.contents.Drink.DrinkTitle}</p>
                            <br />
                            <div className={styles.AboutUsText}>
                                <p>{bar.contents.Drink.AboutUsText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.ProfileSectionOther}>
                <Menu
                    bar={bar}
                    drinkAttributes={{
                        Base: "Gin",
                        Type: "Summer",
                        Strength: "15%",
                    }}
                />

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
                    style={{ width: "100%", height: "400px" }}
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
            <Footer />
        </div>
    );
}

export const getStaticProps = async () => {
    try {
        const res = await AxiosGenericQueryFunction(getBarById(1));
        return {
            props: res.data,
        };
    } catch {
        return {
            props: { ...barPageData },
        };
    }
};
