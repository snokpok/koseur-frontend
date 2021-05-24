import React, { ReactElement, useContext } from "react";
import { IoIosMenu } from "react-icons/io";
import NavbarContext from "../../commons/contexts/navbar-context";
import { NavbarProps } from "../Navbar/Navbar";

export function BurgerNavbar(): ReactElement | null {
    const navbarMeta = useContext(NavbarContext);

    return (
        <div onClick={() => navbarMeta.setOpen(true)} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <IoIosMenu style={{ cursor: "pointer", fontSize: "2em"}} />
        </div>
    );
}
