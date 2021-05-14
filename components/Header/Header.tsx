import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import styles from './Header.module.sass'
import Image from 'next/image'

export interface HeaderProps {
    barName: string
}

export default function Header(props: HeaderProps) {

    return (
        <div className={styles.Header}>
            <div className={styles.BarName}>
                {props.barName}
            </div>
            <Navbar />
        </div>
    )
}
