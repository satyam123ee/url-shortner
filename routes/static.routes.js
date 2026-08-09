import express from "express";
import urlModel from "../models/url.models.js";

const router = express.Router();

router.get("/", async (req, res) => {
   const allUrls = await urlModel.find({});
    res.render("home", {
        shortId: null,
        redirectURL: null,
        urls: allUrls

    });
});

export default router;
