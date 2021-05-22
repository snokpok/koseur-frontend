import { Bar, Drink } from "../graphql/schema-interfaces";

export const imagePath = (object: Partial<Bar | Drink>, size: string) => {
    if (object.images!.length > 0) {
        return `/${object.images![0]!.formats[size].name.split(`${size}_`)[1]}`;
    } else return "";
};
