import Link from "next/link";
import React, { Component, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import styles from "./Navbar.module.sass";
import { slide as Menu } from "react-burger-menu";

export interface NavbarProps {
    // dropdownToggleComponent: React.ReactNode;
    dropdownItems: { name: string; route: string }[];
}
export interface CustomToggleProps {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function Navbar(props: NavbarProps) {
    const [isOpen, setOpen] = useState<boolean>(false);

    const HorizontalNavbar = (
        <div className={styles.HorizontalNavbar}>
            {props.dropdownItems.map((item) => (
                <Link href={item.route}>
                    <a>{item.name}</a>
                </Link>
            ))}
        </div>
    );

    const BurgerNavbar = (
        <div className={styles.BurgerNavbar}>
            <Menu>
                <a id="home" className="menu-item" href="/">
                    Home
                </a>
                <a id="about" className="menu-item" href="/about">
                    About
                </a>
                <a id="contact" className="menu-item" href="/contact">
                    Contact
                </a>
            </Menu>
        </div>
    );

    return (
        <>
            {BurgerNavbar}
            {HorizontalNavbar}
        </>
    );
}
