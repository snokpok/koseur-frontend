import React, { ReactElement, useContext } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import NavbarContext from "../../commons/contexts/navbar-context";
import { NavbarProps } from "../Navbar/Navbar";

export function BurgerNavbar(): ReactElement | null {
    const navbarMeta = useContext(NavbarContext);

    return (
        <div onClick={() => navbarMeta.setOpen(true)}>
            <IoIosArrowDropleftCircle style={{ cursor: "pointer" }} />
        </div>
    );
}
