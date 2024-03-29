const { auth } = require("express-oauth2-jwt-bearer");

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  //   audience: process.env.AUDIENCE,
  //   issuerBaseURL: process.env.ISSUER_BASE_URL,
});

module.exports = { checkJwt };
