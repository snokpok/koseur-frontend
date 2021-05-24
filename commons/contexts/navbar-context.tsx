import { createContext, SetStateAction } from "react";

export interface INavbarMeta {
    isOpen: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const NavbarContext = createContext<INavbarMeta>({
    isOpen: false,
    setOpen: () => ({}),
});
export default NavbarContext;
