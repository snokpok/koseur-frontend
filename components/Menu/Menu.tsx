import React, { ReactElement } from "react";
import styles from "./Menu.module.sass";
import Image from "next/image";
import { Bar } from "../../commons/graphql/schema-interfaces";
import { DrinkCard } from "../DrinkCard/DrinkCard";

export interface MenuProps {
    bar: Bar;
}

export default function Menu({ bar }: MenuProps): ReactElement | null {
    return (
        <>
            <div className={styles.BarConcept}>
                <p>THE GOODS</p>
                <Image src="/decor.png" width={900} height={50} />
            </div>
            {bar?.drinks &&
                bar.drinks!.map((drink) => (
                    <DrinkCard
                        drink={drink}
                        drinkAttributes={drink!.characteristics}
                        imageLeft={Number.parseInt(drink?.id ?? "0") % 2 == 0}
                    />
                ))}
        </>
    );
}
