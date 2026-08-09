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
router.get("/login", async(req, res) => {
    res.render("login");
});

router.get("/signup", async(req, res) => {
    res.render("signup");
});

export default router;
