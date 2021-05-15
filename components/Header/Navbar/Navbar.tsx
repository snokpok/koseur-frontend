import Link from "next/link";
import React, { Component, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import styles from "./Navbar.module.sass";
import Hamburger from "hamburger-react";

export interface NavbarProps {
    dropdownToggleComponent: React.ReactNode;
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

    const CustomToggle = React.forwardRef(
        (props: CustomToggleProps, ref: React.ForwardedRef<any>) => (
            <a
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    props.onClick(e);
                    setOpen(!open);
                }}
            ></a>
        )
    );

    const CustomMenu = React.forwardRef(
        (
            { children, style, className },
            ref: React.LegacyRef<HTMLDivElement>
        ) => {
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
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>

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
