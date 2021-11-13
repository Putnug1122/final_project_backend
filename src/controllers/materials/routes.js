const express = require("express");
const router = express.Router();
const createMaterial = require("./create.materialController");
const getMaterials = require("./get.materialController");
const updateMaterial = require("./update.materialController");
const deleteMaterial = require("./delete.materialController");
router.post("/", createMaterial.service);
router.get("/", getMaterials.service);
router.put("/:id", updateMaterial.service);
router.delete("/:id", deleteMaterial.service);

module.exports = router;
