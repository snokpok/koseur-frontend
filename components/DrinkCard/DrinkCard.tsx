import React, { ReactElement } from "react";
import { Drink, Maybe } from "../../commons/graphql/schema-interfaces";
import styles from "./DrinkCard.module.sass";
import Image from "next/image";
import {
    imagePath,
    imagePathServer,
    imagePathDrink,
} from "../../commons/utils/image-path.function";

export type PossibleAttributes = "Base" | "Type" | "Strength";

export interface DrinkCardProps {
    drink: Maybe<Drink>;
    drinkAttributes: Record<PossibleAttributes, string>;
    imageLeft: boolean;
}

export function DrinkCard({
    drink,
    drinkAttributes,
    imageLeft = false,
}: DrinkCardProps): ReactElement | null {
    const imagePath = imagePathDrink(drink as Drink, "small");

    return (
        <div
            className={
                imageLeft ? styles.DrinkTemplateLeft : styles.DrinkTemplateRight
            }
        >
            {imagePath && (
                <Image
                    className={styles.DrinkImg}
                    src={imagePath}
                    width={400}
                    height={400}
                />
            )}

            <div className={styles.DrinkText}>
                <div className={styles.DrinkName}>{drink?.name}</div>

                <div className={styles.DrinkDescription}>
                    A sultry, spicy & smoky mezcal margarita with TCS signature
                    agave blend - tequila, mezcal & sotol; grapefruit, hibiscus,
                    warm spices, tamarind, & chili salt.
                </div>

                <div className={styles.GridContainer}>
                    {drinkAttributes &&
                        Object.keys(drinkAttributes).map((attr) => (
                            <div className={styles.GridItem__Title}>{attr}</div>
                        ))}

                    {drinkAttributes &&
                        Object.keys(drinkAttributes).map((attr) => (
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
    );
}
