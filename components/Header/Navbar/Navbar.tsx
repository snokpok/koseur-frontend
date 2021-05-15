import Link from "next/link";
import React, { Component, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Hamburger from "../Hamburger/Hamburger";
import styles from "./Navbar.module.sass";

export interface NavbarProps {
    dropdownToggleComponent: React.ReactNode;
    dropdownItems: { name: string; route: string }[];
}
export interface CustomToggleProps {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function Navbar(props: NavbarProps) {
    const [open, setOpen] = useState<boolean>(false);

    const HorizontalNavbar = (
        <div className={styles.HorizontalNavbar}>
            {props.dropdownItems.map((item) => (
                <Link href={item.route}>
                    <a>{item.name}</a>
                </Link>
            ))}
        </div>
    );

    const CustomToggle = React.forwardRef(
        (props: CustomToggleProps, ref: React.ForwardedRef<any>) => (
            <a
                href=""
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    props.onClick(e);
                }}
            >
                {props.children}
            </a>
        )
    );
    const CustomMenu = React.forwardRef(
        (
            { children, style, className },
            ref: React.LegacyRef<HTMLDivElement>
        ) => {
            const [value, setValue] = useState("");

            return (
                <div ref={ref} style={style} className={className}>
                    <ul className="list-unstyled">
                        {React.Children.toArray(children)}
                    </ul>
                </div>
            );
        }
    );

    const BurgerNavbar = (
        <div className={styles.BurgerNavbar}>
            <Dropdown>
                <Dropdown.Toggle
                    as={CustomToggle}
                    id="dropdown-custom-components"
                >
                    <Hamburger open={open} onClickHandler={() => setOpen(!open)}/>
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                    {props.dropdownItems.map((item) => (
                        <Dropdown.Item eventKey={item.name}>
                            {item.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );

    return (
        <>
            {BurgerNavbar}
            {HorizontalNavbar}
        </>
    );
}
