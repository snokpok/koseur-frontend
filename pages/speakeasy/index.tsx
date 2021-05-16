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
                </div>
            </div> 
        </div>
    );
}
