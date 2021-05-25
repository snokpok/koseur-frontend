import { createContext, SetStateAction } from "react";
import { DeviceNames } from "../utils/screen-sizes";

export interface IScreenMeta {
    size: {
        name?: DeviceNames;
        w?: number;
        h?: number;
    };
    isSmall: boolean;
    isLoading: boolean;
    setLoading: React.Dispatch<SetStateAction<boolean>>;
}

const ScreenContext = createContext<IScreenMeta>({
    size: {},
    isSmall: false,
    isLoading: true,
    setLoading: () => ({}),
});

export default ScreenContext;
