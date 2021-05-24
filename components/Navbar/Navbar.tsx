import React, { ReactElement, useContext } from "react";
import ScreenContext from "../../commons/contexts/screen-context";
import { BurgerNavbar } from "../BurgerNavbar/BurgerNavbar";
import BurgerOverlay from "../BurgerOverlay/BurgerOverlay";

export interface NavbarProps {
    // dropdownToggleComponent: React.ReactNode;
    dropdownItems?: { name: string; route: string }[];
}

export function Navbar({ dropdownItems }: NavbarProps): ReactElement | null {
    if (!dropdownItems || dropdownItems.length == 0) return null;

    return <BurgerNavbar />;
}
