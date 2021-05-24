import React, { ReactElement } from "react";
import styles from "./Footer.module.sass";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";

export interface FooterProps {}

export default function Footer(props: FooterProps): ReactElement | null {
    const width = 50;
    return (
        <div className={styles.Footer}>
            <AnchorLink href="#FrontPage">
                <img className={styles.FooterLogo} src={"/21gam-logo.jpg"}/>
            </AnchorLink>

            <div className={styles.FooterInfo}>
                <div>
                    <a
                        href="https://www.google.com/maps/place/21Gam/@21.0200633,105.846649,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab391c803bb3:0xa46cb5a3e8f7e5e4!8m2!3d21.0200583!4d105.8488377"
                        target="_blank"
                    >
                        26 Truong Han Sieu, Tran Hung Dao, Hoan Kiem, Ha Noi
                    </a>
                </div>

                <div>
                    <a href="tel:+84988111121">+84 988.111.121</a>
                </div>

                <div>
                    <a href="tel:+84988111121">Social Media</a>
                </div>
            </div>
        </div>
    );
}
