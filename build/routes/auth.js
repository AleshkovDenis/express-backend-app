"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const router = new express_1.Router();
router.get("/google", passport_1.default.authenticate("google", { scope: "profile" }));
router.get("/google/callback", passport_1.default.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login/failed",
}));
router.get("/github", passport_1.default.authenticate("github", { scope: "profile" }));
router.get("/github/callback", passport_1.default.authenticate("github", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login/failed",
}));
router.get("/facebook", passport_1.default.authenticate("facebook", { scope: "profile" }));
router.get("/facebook/callback", passport_1.default.authenticate("facebook", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login/failed",
}));
router.post("/logout", (req, res) => {
    req.logout();
    res.redirect("http://localhost:3000/");
});
exports.default = router;
