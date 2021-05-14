import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Image from 'next/image'
import styles from '../../styles/styles.module.sass'

export default function BarPage() {
    const sideLength = 130

    return (
        <div>
            <div className={styles.bgWrap}>
                <Image
                    src='/bar-background2.jpg'
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div >
            <Header
                barName="SpeakEasy"
            />
            <div
                className={styles.Logo}
            >
                <Image
                    src="/logo.jpg"
                    width={sideLength}
                    height={sideLength}
                />
            </div>
            <p className={styles.bgText}>
                Bring me closer...
                    <br />
                    baby
                </p>
        </div>
    )
}
