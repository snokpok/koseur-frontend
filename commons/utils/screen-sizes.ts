export type DeviceNames = "ip5se" | "ip678" | "ipx" | "ip678p" | "ipad" | "ipp";
export type Dimensions = { w: number; h: number };
export const screenSizes: Record<DeviceNames, Dimensions> = {
    ip5se: {
        w: 320,
        h: 560,
    },
    ip678: {
        w: 375,
        h: 667,
    },
    ip678p: {
        w: 414,
        h: 667,
    },
    ipx: {
        w: 375,
        h: 812,
    },
    ipad: {
        w: 768,
        h: 1024,
    },
    ipp: {
        w: 1024,
        h: 1366,
    },
};
