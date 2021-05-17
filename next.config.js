const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");
const withCSS = require("@zeit/next-css");
module.exports = withCSS({});
module.exports = (phase, {defaultConfig}) => {
    return {
        env: {
            api:
                phase == PHASE_DEVELOPMENT_SERVER
                    ? "http://localhost:3000/api"
                    : "",
        },
    };
};
