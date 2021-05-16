import React, { Component, useEffect } from "react";
import Header from "../../components/Header/Header";
import Image from "next/image";
import styles from "../../styles/styles.module.sass";
import FadeInImage from "../../components/FadeInImage/FadeInImage";

export default function BarPage() {
    return (
        <div className={styles.ProfileContainer}>
            <div className={styles.ProfileSection}>
                <div className={styles.bgWrap}>
                    <FadeInImage 
                        src="/background.jpeg"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <Header barName="KOSEUR" />
                <p className={styles.bgText}>
                    BRING ME KOSEUR
                    <br />
                </p>
            </div>

            <div className={styles.ProfileSection_2}>
                <div className={styles.aboutUs}>
                    <Image 
                        src="/bartender.jpg"
                        width={600} 
                        height={900}
                    />

                    <div className={styles.about_us_title}>
                        <p> Bar & Champagne </p>
                        <p>A new bar concept by Koseur </p>
                        <br />
                        <div className={styles.about_us_text}>
                            <p>A bar, café and Bar&Champagne, all in one. Thousands of stories, thousands of possibilities; 
                                    the atmosphere, that intimacy, that light. The picture windows, look and be seen; watch life pass by or 
                                    immerse yourself in it; enjoy the hustle and bustle of a Gijón that was always modern, independent, 
                                    bourgeois, sophisticated and joyful: the little New York, the little London… the Great Gijón.
                            </p>
                         </div>
                    </div>

                    <div className={styles.drink}>
                        <Image 
                            src="/drink_1.jpg"
                            width={600} 
                            height={900}
                        />

                        <div className={styles.drink_title}>
                            <p> OUR STORY </p>
                            <br />
                            <div className={styles.about_us_text}>
                                <p>
                                    Koseur has been a beacon for the community of Greenwich Village since it opened its doors in 1915. 
                                    Now a registered New York City landmark, this modest meeting house has always attracted people from 
                                    all walks of life: famous actors, writers, and musicians, to the down-at-heel of the beatnik generation, 
                                    all of whom have found solace in its relaxed and unpretentious environs. A place where a cup of espresso, a warm 
                                    smile or a friendly embrace epitomized life’s simple pleasures.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.ProfileSection_3}>
                <div className={styles.bar_concept}>
                    <p>THE GOODS</p>
                    <Image
                        src="/decor.png"
                        width={900}
                        height={50}
                    />
                </div>

                <div className={styles.drink_template}>
                    <Image 
                        src="/drink_2.jpg"
                        width={800}
                        height={550}
                    />
                    <div className={styles.drink_text_right}>
                        <p>BOOZE and HOOCH</p>
                    </div>
                </div>

                <div className={styles.drink_template}>
                    <Image 
                        src="/drink_3.jpg"
                        width={800}
                        height={550}
                    />
                    <div className={styles.drink_text_left}>
                        <p>Fall in Love with The Moon</p>
                    </div>
                </div>

                <div className={styles.drink_template}>
                    <div className={styles.drink_vertical_left}>
                        <Image 
                            src="/drink_4.jpg"
                            width={800}
                            height={550}
                        />
                        <div className={styles.drink_text_right}>
                            <p>HEAVEN in HELL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}
