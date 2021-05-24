import { createContext } from "react";
import { DeviceNames } from "../utils/screen-sizes";

export interface IScreenMeta {
    size: {
        name?: DeviceNames;
        w?: number;
        h?: number;
    };
    isSmall: boolean;
}

export const ScreenContext = createContext<IScreenMeta>({
    size: {},
    isSmall: false,
});
