import React, { ReactElement } from "react";
import styles from "./Menu.module.sass";
import Image from "next/image";
import { Bar } from "../../commons/graphql/schema-interfaces";

export type PossibleAttributes = "Base" | "Type" | "Strength";

export interface MenuProps {
    bar: Bar;
    drinkAttributes: Record<PossibleAttributes, string>;
}

export default function Menu({
    bar,
    drinkAttributes,
}: MenuProps): ReactElement | null {
    return (
        <>
            <div className={styles.BarConcept}>
                <p>THE GOODS</p>
                <Image src="/decor.png" width={900} height={50} />
            </div>
            {bar.drinks &&
                bar.drinks!.map((drink) => (
                    <div className={
                        Number.parseInt(drink?.id ?? "0") % 2 == 0
                            ? styles.DrinkTemplateRight
                            : styles.DrinkTemplateLeft
                        }>
                        <Image
                            className={styles.DrinkImg}
                            src={"/drink_2.jpg"}
                            width={600}
                            height={550}
                        />
                        
                        <div className={ styles.DrinkText}>

                            <p className={styles.DrinkName}>{drink?.name}</p>

                            <p className={styles.DrinkDescription}>
                                A sultry, spicy & smoky mezcal margarita with
                                TCS signature agave blend - tequila, mezcal &
                                sotol; grapefruit, hibiscus, warm spices,
                                tamarind, & chili salt.
                            </p> 

                            <div className={styles.GridContainer}>

                                {Object.keys(drinkAttributes).map((attr) => (
                                    <>
                                        <div className={styles.GridItem__Title}>
                                            {attr}
                                        </div>
                                    </>
                                ))}

                                {Object.keys(drinkAttributes).map((attr) => (
                                    <>
                                        <div className={styles.GridItem}>
                                            {
                                                drinkAttributes[
                                                    attr as PossibleAttributes
                                                ]
                                            }
                                        </div>
                                    </>
                                ))}
                                
                            </div>
                        </div> 
                    </div>
                ))}
        </>
    );
}
