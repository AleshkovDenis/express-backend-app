import express, { Express } from "express";
import passport from "passport";
import cors from "cors";
import cookieSession from "cookie-session";

import "./services/passport";
import authRouter from "./routes/auth";
import config from "./config";

const PORT = config.port || 3000;

const app: Express = express();

app.use(
  cookieSession({
    name: "session",
    keys: [config.cookieSecret],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:5000",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    credentials: true,
  })
);

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running ${PORT}`);
});
