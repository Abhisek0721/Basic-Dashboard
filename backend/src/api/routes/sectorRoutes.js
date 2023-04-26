import express from "express";
const router = express.Router();

import SectorCtrl from "../controllers/sectorCtrl.js";

const sectorCtrl = new SectorCtrl();

router.route("/sectorCount").get(sectorCtrl.sectorCount);

router.route("/regionCount").get(sectorCtrl.regionCount);

router.route("/countryCount").get(sectorCtrl.countryCount);

router.route("/fetchData").get(sectorCtrl.fetchData);

export default router;