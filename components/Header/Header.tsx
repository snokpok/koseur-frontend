import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import styles from "./Header.module.sass";
import Image from "next/image";

export interface HeaderProps {
    barName: string;
}

export default function Header(props: HeaderProps) {
    return (
        <div className={styles.Header}>
            <div className={styles.BarName}>{props.barName}</div>
            <div className={styles.Logo}>
                <Image src="/koseur_logo.jpg" width={100} height={115}/>
            </div>
            <Navbar dropdownItems={[{ name: "MENU", route: "/menu" }]} />
        </div>
    );
}
