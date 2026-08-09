import express from "express";
import userModel from "../models/user.models.js";

const router = express.Router();

async function handleUserSignUp(req, res) {
    const { username, email, password } = req.body;

    try {
        await userModel.create({
            username,
            email,
            password
        });

        return res.redirect("/");

    } catch (error) {
        console.log(error);

        if (error.code === 11000) {
            return res.status(400).send("Username already exists");
        }

        return res.status(500).send("Something went wrong");
    }
}

async function handleUserLogin(req, res) {
    const { username, password } = req.body;

    try {
        const user = await userModel.findOne({ username });

        if (!user) {
            return res.status(400).render("login", {
                error: "User not found"
            });
        }

        if (user.password !== password) {
            return res.status(400).render("login", {
                error: "Incorrect password"
            });
        }

        return res.redirect("/");

    } catch (error) {
        console.log(error);

        return res.status(500).render("login", {
            error: "Something went wrong"
        });
    }
}






export { handleUserSignUp, handleUserLogin };