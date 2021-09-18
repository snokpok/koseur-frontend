import Link from "next/link";
import React, { useContext } from "react";
import styles from "./BurgerOverlay.module.sass";
import { NavbarProps } from "../Navbar/Navbar";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import NavbarContext from "../../commons/contexts/navbar-context";
import ScreenContext from "../../commons/contexts/screen-context";

export interface BurgerOverlayProps extends NavbarProps {}

export const navbarProps = [
    {
        name: "Home",
        route: "/",
    },
    {
        name: "About us",
        route: "/",
    },
    {
        name: "Hanoi",
        route: "/#category-section",
    },
    {
        name: "Sai Gon",
        route: "/#category-section",
    },
];

const BurgerOverlay = (props: BurgerOverlayProps) => {
    const navbarMeta = useContext(NavbarContext);
    const screenMeta = useContext(ScreenContext);

    return (
        <div
            className={
                navbarMeta.isOpen
                    ? styles.BurgerOverlay
                    : styles.BurgerOverlayHide
            }
            style={{ width: !screenMeta.isSmall ? "20%" : "50%" }}
        >
            <div
                className={styles.BurgerOverlayItems}
                onClick={() => navbarMeta.setOpen(false)}
                style={{ fontSize: 30 }}
            >
                <IoIosArrowDroprightCircle />
            </div>
            {(props.dropdownItems == null ? navbarProps : props.dropdownItems).map((item) => (
                <div className={styles.BurgerOverlayItems}>
                    <Link href={item.route}>{item.name}</Link>
                </div>
            ))}
        </div>
    );
};
export default BurgerOverlay;
