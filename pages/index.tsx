import Image from "next/image";
import FadeInImage from '../components/FadeInImage/FadeInImage'
import Link from "next/link";
import styles from "../styles/styles.module.sass";
import Head from 'next/head'

export default function MainWorkspace() {
    const sideLength = 200;

    return (
        <>
            <Head>
                <title>Koseur | Home</title>
                <link
                    rel="stylesheet"
                />
            </Head>
            <div className={styles.bgWrap}>
                <FadeInImage
                    src="/landing-page.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className={styles.LandingPage}>
                <FadeInImage
                    src="/logo.png"
                    width={sideLength}
                    height={sideLength}
                />
                <div className={styles.Intro}>KOSEUR TOGETHER</div>
                <div className={styles.HomePageButton}>
                    <Link href="/speakeasy">
                        <a>Explore</a>
                    </Link>
                </div>
            </div>
        </>
    );
}
