const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  const env = {
    API_PROD_URL: (() => {
      if (isDev) return "http://localhost:3000/api/";
      if (isProd) {
        // Note: The code below needs to be uncommented, and you should use your domin where your API is hosted.
        // return 'Enter Your URL here'
      }
      if (isStaging) return "http://localhost:3000/api/";
      return "RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
    API_BASE_URL: "http://localhost:3000/api",
  };

  return {
    env,
  };
};
