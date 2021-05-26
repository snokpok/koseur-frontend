import React, { ReactElement } from "react";
import styles from "./Footer.module.sass";
import AnchorLink from "react-anchor-link-smooth-scroll";

export type SocialMediaNames = "facebook" | "instagram";

export interface FooterProps {
    logoLink?: string;
    addressLink?: string;
    address: string;
    phoneNo: string;
    email?: string;
    socialMediaLinks?: Record<SocialMediaNames, string>;
}

export default function Footer(props: FooterProps): ReactElement | null {
    return (
        <div className={styles.Footer}>
            <AnchorLink href="#FrontPage">
                {props.logoLink ? (
                    <img className={styles.FooterLogo} src={props.logoLink} />
                ) : null}
            </AnchorLink>

            <div className={styles.FooterInfo}>
                <div>
                    <a href={props.addressLink} target="_blank">
                        {props.address}
                    </a>
                </div>

                <div>
                    {props.phoneNo ? (
                        <a href={`tel:${props.phoneNo}`}>{props.phoneNo}</a>
                    ) : null}
                </div>
                <div>
                    {props.email ? (
                        <a href={`mailto:${props.email}`}>{props.email}</a>
                    ) : null}
                </div>

                <div>
                    {props.socialMediaLinks &&
                    Object.keys(props.socialMediaLinks).length !== 0
                        ? Object.keys(props.socialMediaLinks).map((name) => (
                              <div>
                                  <a
                                      href={
                                          props.socialMediaLinks![
                                              name as SocialMediaNames
                                          ] as string
                                      }
                                  >
                                      {name}
                                  </a>
                              </div>
                          ))
                        : null}
                </div>
            </div>
        </div>
    );
}
