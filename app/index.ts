import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Service listening on port", 3000);
});