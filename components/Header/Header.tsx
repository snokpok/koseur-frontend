import React, { Component, useContext } from "react";
import { Navbar, NavbarProps } from "../Navbar/Navbar";
import styles from "./Header.module.sass";
import Image from "next/image";
import Link from "next/link";
import FadeInImage from "../../components/FadeInImage/FadeInImage";
import ScreenContext from "../../commons/contexts/screen-context";

export interface HeaderProps extends NavbarProps {
    barName: string;
}

export default function Header(props: HeaderProps) {
    const screenMeta = useContext(ScreenContext);

    return (
        <>
            <div className={styles.Header}>
                
                <div className={styles.Logo}>
                    <Link href="/">
                        <a>
                            <Image src="/logo.png" width={400} height={400} />
                        </a>
                    </Link>
                </div>

                <Navbar dropdownItems={props.dropdownItems} />
            </div>
        </>
    );
}
