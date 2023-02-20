import { Router } from "express";
import passport from "passport";

const router = new Router();

router.get("/google", passport.authenticate("google", { scope: "profile" }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login/failed",
  })
);

router.get("/github", passport.authenticate("github", { scope: "profile" }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login/failed",
  })
);

router.get("/facebook", passport.authenticate("facebook", { scope: "profile" }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login/failed",
  })
);

router.post("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/");
});

export default router;
