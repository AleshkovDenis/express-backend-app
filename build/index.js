"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const cors_1 = __importDefault(require("cors"));
const cookie_session_1 = __importDefault(require("cookie-session"));
require("./services/passport");
const auth_1 = __importDefault(require("./routes/auth"));
const config_1 = __importDefault(require("./config"));
const PORT = config_1.default.port || 3000;
const app = (0, express_1.default)();
app.use((0, cookie_session_1.default)({
    name: "session",
    keys: [config_1.default.cookieSecret],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use((0, cors_1.default)({
    origin: "http://localhost:5000",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    credentials: true,
}));
app.use("/auth", auth_1.default);
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running ${PORT}`);
});
