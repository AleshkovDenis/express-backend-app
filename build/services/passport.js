"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth20_1 = require("passport-google-oauth20");
const passport_github2_1 = require("passport-github2");
const passport_facebook_1 = require("passport-facebook");
const passport_1 = __importDefault(require("passport"));
const config_1 = __importDefault(require("../config"));
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: config_1.default.googleClientId,
    clientSecret: config_1.default.googleClientSecret,
    callbackURL: "/auth/google/callback",
}, function (accessToken, refreshToken, profile, done) {
    done(null, profile);
}));
passport_1.default.use(new passport_github2_1.Strategy({
    clientID: config_1.default.githubClientId,
    clientSecret: config_1.default.githubClientSecret,
    callbackURL: "/auth/github/callback",
}, function (accessToken, refreshToken, profile, done) {
    done(null, profile);
}));
passport_1.default.use(new passport_facebook_1.Strategy({
    clientID: "FACEBOOK_APP_ID",
    clientSecret: "FACEBOOK_APP_SECRET",
    callbackURL: "/auth/facebook/callback",
}, function (accessToken, refreshToken, profile, done) {
    done(null, profile);
}));
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((user, done) => {
    done(null, user);
});
