import Image from "next/image";
import Link from "next/link";
import styles from "../styles/styles.module.sass";

export default function MainWorkspace() {
    const sideLength = 200;

    return (
        <>
            <div className={styles.bgWrap}>
                <Image
                    src="/landing_page.jpeg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className={styles.LandingPage}>
                <Image
                    src="/koseur_logo.jpg"
                    width={sideLength}
                    height={sideLength}
                />
                <div className={styles.Intro}>Bring me Koseur, baby</div>
                <div className={styles.HomePageButton}>
                    <Link href="/speakeasy">
                        <a>Go to home page</a>
                    </Link>
                </div>
            </div>
        </>
    );
}
