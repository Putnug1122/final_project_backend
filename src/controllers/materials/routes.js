const express = require("express");
const router = express.Router();
const createMaterial = require("./create.materialController");
const getMaterials = require("./get.materialController");
const updateMaterial = require("./update.materialController");
const deleteMaterial = require("./delete.materialController");
const auth = require("../../middleware/jwt");
router.post("/", auth.checkJWT, createMaterial.service);
router.get("/", auth.checkJWT, getMaterials.service);
router.get("/:id", auth.checkJWT, getMaterials.service);
router.put("/:id", auth.checkJWT, updateMaterial.service);
router.delete("/:id", auth.checkJWT, deleteMaterial.service);

module.exports = router;
