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

export interface BarPageProps {
    data: {
        bar: Bar;
    };
}

export default function BarPage({ data: { bar } }: BarPageProps) {
    return (
        <div className={styles.ProfileContainer}>
            <Parallax bgImage="/background.jpeg" strength={300} blur={{min: -5, max: 5}}>
                <div className={styles.ProfileSection}>
                    <Header barName={bar.name!} />
                    <p className={styles.BgText}>{bar.contents.BgText}</p>
                </div>
            </Parallax>

            <div className={styles.ProfileSectionOther}>
                <div className={styles.AboutUs}>
                    {/* <Image
                        // loader={ImageLoaderFunction}
                        src={"/bartender.jpg"}
                        width={600}
                        height={900}
                    /> */}

                    <video autoPlay loop muted className={styles.BackgroundVideo}>
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
                        <Parallax bgImage="/drink_1.jpg" strength={350} blur={{min: -5, max: 5}} style={{width: "40%", height: 900, float: "right"}} />

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
                <div className={styles.BarConcept}>
                    <p>THE GOODS</p>
                    <Image src="/decor.png" width={900} height={50} />
                </div>
                {bar.drinks &&
                    bar.drinks!.map((drink) => (
                        <div className={styles.DrinkTemplate}>
                            <Image
                                src={"/drink_2.jpg"}
                                width={800}
                                height={550}
                            />
                            <div
                                className={
                                    Number.parseInt(drink?.id ?? "0") % 2 == 0
                                        ? styles.DrinkTextRight
                                        : styles.DrinkTextLeft
                                }
                            >
                                <p>{drink?.name}</p>

                                <p className={styles.DrinkDescription}>A sultry, spicy & smoky mezcal margarita with TCS signature agave blend - tequila, mezcal & sotol;
                                 grapefruit, hibiscus, warm spices, tamarind, & chili salt.</p>

                                <div className={styles.GridContainer}>
                                   <div className={styles.GridItem}>Base</div>
                                   <div className={styles.GridItem}>Type</div>
                                   <div className={styles.GridItem}>Strength</div>
                                   <div className={styles.GridItem} style={{color: "#AE6F10", fontSize: "0.8em"}}>Gin</div>
                                   <div className={styles.GridItem} style={{color: "#AE6F10", fontSize: "0.8em"}}>Summer</div>
                                   <div className={styles.GridItem} style={{color: "#AE6F10", fontSize: "0.8em"}}>15%</div>
                                </div>
                            </div>

                            
                        </div>
                    ))}
            </div>
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
