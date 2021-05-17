const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");
const withCSS = require("@zeit/next-css");
module.exports = withCSS({});
module.exports = (phase, {defaultConfig}) => {
    return {
        env: {
            KAPI_1: phase == PHASE_DEVELOPMENT_SERVER ? "http://localhost:3000/api" : "",
            KAPI_2_GQL: phase == PHASE_DEVELOPMENT_SERVER ? "http://localhost:1337/graphql" : "",
            KAPI_2: phase == PHASE_DEVELOPMENT_SERVER ? "http://localhost:1337" : "",
        },
    };
};
