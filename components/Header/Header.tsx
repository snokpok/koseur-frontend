import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import styles from "./Header.module.sass";
import Image from "next/image";
import { NavItem } from "react-bootstrap";
import Hamburger from "./Hamburger/Hamburger";

export interface HeaderProps {
    barName: string;
    logoSideLength: number;
}

export default function Header(props: HeaderProps) {
    return (
        <div className={styles.Header}>
            <div className={styles.BarName}>{props.barName}</div>
            <div className={styles.Logo}>
                <Image
                    src="/logo.jpg"
                    width={props.logoSideLength}
                    height={props.logoSideLength}
                />
            </div>
            <Navbar dropdownItems={[{ name: "Menu", route: "/menu" }]} />
        </div>
    );
}
