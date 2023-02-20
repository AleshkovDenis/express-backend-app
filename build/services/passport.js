"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth20_1 = require("passport-google-oauth20");
const passport_1 = __importDefault(require("passport"));
const config_1 = __importDefault(require("../config"));
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: config_1.default.googleClientId,
    clientSecret: config_1.default.googleClientSecret,
    callbackURL: "/auth/google/callback",
}, function (accessToken, refreshToken, profile, done) {
    console.log('profile', profile);
    done(null, profile);
}));
passport_1.default.serializeUser((user, done) => {
    console.log("serializeUser", user);
    done(null, user);
});
passport_1.default.deserializeUser((user, done) => {
    console.log("deserializeUser", user);
    done(null, user);
});
