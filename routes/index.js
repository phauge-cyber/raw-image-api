const express = require('express');
const router = express.Router();
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

const controller = require('../controllers');

const checkJwt = auth({
  audience: 'https://raw-images/api',
  issuerBaseURL: `https://dev-68ucbh254hvghi6c.us.auth0.com/`,
  tokenSigningAlg: 'RS256',
});

router.post(
  '/txt2img/full',
  checkJwt,
  requiredScopes(['generate:full']),
  controller.txt2imgFull
);

router.post('/txt2img', controller.txt2img);

module.exports = router;
