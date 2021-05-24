import styles from "./HorizontalNavbar.module.sass";
import Link from "next/link";
import { NavbarProps } from "../Navbar/Navbar";

export const HorizontalNavbar: React.FC<NavbarProps> = (props: NavbarProps) => (
    <div className={styles.HorizontalNavbar}>
        {props.dropdownItems?.map((item) => (
            <Link href={item.route} key={item.name}>
                <a>{item.name}</a>
            </Link>
        ))}
    </div>
);
