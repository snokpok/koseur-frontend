import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import styles from "./Header.module.sass";
import Image from "next/image";
import Link from 'next/link'

export interface HeaderProps {
    barName: string;
}

export default function Header(props: HeaderProps) {
    return (
        <>
            <div className={styles.Header}>
                <div className={styles.BarName}>
                    <Link href='/'>
                        <a>{props.barName}</a>
                    </Link>
                </div>

                
                <div className={styles.Logo}>
                    <Link href='/speakeasy'>
                        <a><Image src="/logo.png" width={100} height={115}/></a>
                    </Link>
                </div>
            
                <Navbar dropdownItems={[{ name: "MENU", route: "/menu" }]} />
            </div>
        </>
    );
}
