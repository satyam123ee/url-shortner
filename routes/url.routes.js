import express from "express";

import { handleGenerateNewUrl , handleRedirectToOriginalUrl, handlegetanalytics} from "../controllers/url.controllers.js";


const router = express.Router();

router.post("/", handleGenerateNewUrl);
router.get("/:shortId", handleRedirectToOriginalUrl);
router.get("/analytics/:shortId", handlegetanalytics);

export default router;

