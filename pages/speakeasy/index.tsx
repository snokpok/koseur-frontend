import React, { Component, useEffect } from "react";
import Header from "../../components/Header/Header";
import Image from "next/image";
import styles from "../../styles/styles.module.sass";

export default function BarPage() {
    return (
        <div>
            <div className={styles.bgWrap}>
                <Image
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
    );
}
