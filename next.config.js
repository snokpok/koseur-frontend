const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase, { defaultConfig }) => {
    return {
        env: {
            KAPI_1:
                phase == PHASE_DEVELOPMENT_SERVER
                    ? "http://localhost:3000/api"
                    : "",
            KAPI_2_GQL:
                phase == PHASE_DEVELOPMENT_SERVER
                    ? "http://localhost:1337/graphql"
                    : "",
            KAPI_2:
                "http://localhost:1337"
        },
        images: {
            domains: ['localhost'],
            deviceSizes: [1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 320, 375, 414, 768, 1024],
        }
    };
};
