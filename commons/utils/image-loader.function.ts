import { ImageLoaderProps } from "next/image";

export const ImageLoaderFunction = ({ src }: ImageLoaderProps) =>
    `${process.env.KAPI_2}${src}`;
