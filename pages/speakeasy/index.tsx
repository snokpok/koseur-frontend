import React, { Component, useEffect } from "react";
import Header from "../../components/Header/Header";
import Image from "next/image";
import styles from "../../styles/styles.module.sass";
// import anotherStyles from "./BarPage.module.sass"
import FadeInImage from "../../components/FadeInImage/FadeInImage";

export default function BarPage() {
    return (
        <div className={styles.ProfileContainer}>
            <div className={styles.ProfileSection}>
                <div className={styles.BgWrap}>
                    <FadeInImage
                        src="/background.jpeg"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <Header barName="KOSEUR" />
                <p className={styles.BgText}>
                    BRING ME KOSEUR
                    <br />
                </p>
            </div>

            <div className={styles.ProfileSectionOther}>
                <div className={styles.AboutUs}>
                    <Image src="/bartender.jpg" width={600} height={900} />

                    <div className={styles.AboutUsTitle}>
                        <p> Bar & Champagne </p>
                        <p>A new bar concept by Koseur </p>
                        <br />
                        <div className={styles.AboutUsText}>
                            <p>
                                A bar, café and Bar&Champagne, all in one.
                                Thousands of stories, thousands of
                                possibilities; the atmosphere, that intimacy,
                                that light. The picture windows, look and be
                                seen; watch life pass by or immerse yourself in
                                it; enjoy the hustle and bustle of a Gijón that
                                was always modern, independent, bourgeois,
                                sophisticated and joyful: the little New York,
                                the little London… the Great Gijón.
                            </p>
                        </div>
                    </div>

                    <div className={styles.Drink}>
                        <Image src="/drink_1.jpg" width={600} height={900} />

                        <div className={styles.DrinkTitle}>
                            <p> OUR STORY </p>
                            <br />
                            <div className={styles.AboutUsText}>
                                <p>
                                    Koseur has been a beacon for the community
                                    of Greenwich Village since it opened its
                                    doors in 1915. Now a registered New York
                                    City landmark, this modest meeting house has
                                    always attracted people from all walks of
                                    life: famous actors, writers, and musicians,
                                    to the down-at-heel of the beatnik
                                    generation, all of whom have found solace in
                                    its relaxed and unpretentious environs. A
                                    place where a cup of espresso, a warm smile
                                    or a friendly embrace epitomized life’s
                                    simple pleasures.
                                </p>
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

                <div className={styles.DrinkTemplate}>
                    <Image src="/drink_2.jpg" width={800} height={550} />
                    <div className={styles.DrinkTextRight}>
                        <p>BOOZE and HOOCH</p>
                    </div>
                </div>

                <div className={styles.DrinkTemplate}>
                    <Image src="/drink_3.jpg" width={800} height={550} />
                    <div className={styles.DrinkTextLeft}>
                        <p>Fall in Love with The Moon</p>
                    </div>
                </div>

                <div className={styles.DrinkTemplate}>
                    <Image src="/drink_4.jpg" width={800} height={550} />
                    <div className={styles.DrinkTextRight}>
                        <p>HEAVEN in HELL</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
