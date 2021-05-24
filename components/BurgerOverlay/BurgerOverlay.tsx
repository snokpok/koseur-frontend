import Link from "next/link";
import React, {
    Component,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import styles from "./BurgerOverlay.module.sass";
import { reveal as Menu } from "react-burger-menu";
import { burgerMenuStyles } from "./menu-styles";
import { NavbarProps } from "../Navbar/Navbar";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import NavbarContext from "../../commons/contexts/navbar-context";

export interface BurgerOverlayProps extends NavbarProps {}

const BurgerOverlay = (props: BurgerOverlayProps) => {
    const navbarMeta = useContext(NavbarContext);

    return (
        <div
            className={
                navbarMeta.isOpen
                    ? styles.BurgerOverlay
                    : styles.BurgerOverlayHide
            }
        >
            <div
                className={styles.BurgerOverlayItems}
                onClick={() => navbarMeta.setOpen(false)}
                style={{ fontSize: 30 }}
            >
                <IoIosArrowDroprightCircle />
            </div>
            {props.dropdownItems?.map((item) => (
                <div className={styles.BurgerOverlayItems}>
                    <Link href={item.route}>{item.name}</Link>
                </div>
            ))}
        </div>
    );
};
export default BurgerOverlay;
