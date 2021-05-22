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

export interface BarPageProps {
    data: {
        bar: Bar;
    };
}

export default function BarPage({ data: { bar } }: BarPageProps) {
    return (
        <div className={styles.ProfileContainer}>
            <div className={styles.ProfileSection}>
                <div className={styles.BgWrap}>
                    <FadeInImage
                        // loader={ImageLoaderFunction}
                        src={"/background.jpeg"}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <Header barName={bar.name!} />
                <p className={styles.BgText}>{bar.contents.BgText}</p>
            </div>

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
                        <Image src="/drink_1.jpg" width={600} height={900} />

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
                                <p style={{fontSize: "0.7em", marginTop: "10%"}}>Base | Type | Strength</p>
                                <p style={{color: "#91760d", fontSize: "0.7em"}}>Gin  Summer  15%</p>
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
