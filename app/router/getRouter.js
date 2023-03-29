const express = require('express');
const cadexController = require("../controller/cadex");
const validationModule = require('../validation/validation');
const {querySchema} = require("../validation/schema");
const router = express.Router();

// http://localhost:3000/cadex
/**
 * GET /v1/cadex
 * @summary Génère un cadex
 * @tags GET
 * @return {Cadex} 200 - success response - application/json
 */
router.get("/v1/cadex",validationModule.validateQuery(querySchema),cadexController.getCadex);

// gestion de la 404

module.exports = router;