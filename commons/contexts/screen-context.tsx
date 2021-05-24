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

const ScreenContext = createContext<IScreenMeta>({
    size: {},
    isSmall: false,
});

export default ScreenContext;