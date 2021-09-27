import { Bar, Drink } from "../graphql/schema-interfaces";

export const imagePath = (object: Partial<Bar | Drink>, position: number) => {
    if (object!.images!.length > 0) {
        console.log(object);
        return `/${object?.images![position - 1]!.name}`;
    } else return "";
};

export const imagePathServer = (object: Partial<Bar | Drink>, size: string) => {
    if (object.images!.length > 0) {
        return `${object.images![0]!.formats[size].name.split(`${size}_`)[1]}`;
    } else return "";
};

export const imagePathDrink = (object: Partial<Bar | Drink>, size: string) => {
    if (object.images!.length > 0) {
        return `http://localhost:1337${object.images![0]!.formats[size].url}`;
    }
};
