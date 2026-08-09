import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home", {
        shortId: null,
        redirectURL: null
    });
});

export default router;
