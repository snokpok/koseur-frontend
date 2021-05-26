import React, { ReactElement } from "react";
import styles from "../Footer/Footer.module.sass";

export interface FooterHomepageProps {}

export function FooterHomepage(
    props: FooterHomepageProps
): ReactElement | null {
    return (
        <div className={styles.Footer} style={{ justifyContent: "center" }}>
            <div>&#169; Koseur 2021</div>
        </div>
    );
}
