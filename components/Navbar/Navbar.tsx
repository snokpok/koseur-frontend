import React, { ReactElement, useContext } from "react";
import { ScreenContext } from "../../commons/contexts/screen-context";
import { BurgerNavbar } from "../BurgerNavbar/BurgerNavbar";
import BurgerOverlay from "../BurgerOverlay/BurgerOverlay";
import { HorizontalNavbar } from "../HorizontalNavbar/HorizontalNavbar";

export interface NavbarProps {
    // dropdownToggleComponent: React.ReactNode;
    dropdownItems: { name: string; route: string }[];
}

export function Navbar({ dropdownItems }: NavbarProps): ReactElement | null {
    const screenMeta = useContext(ScreenContext);
    if (!dropdownItems || dropdownItems.length == 0) return null;
    const NavbarObject = screenMeta.isSmall ? (
        <BurgerNavbar />
    ) : (
        <HorizontalNavbar dropdownItems={dropdownItems} />
    );

    return NavbarObject;
}
