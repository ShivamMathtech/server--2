// const something = require ("some library")
const express = require("express");
const { mcbfn2, mcbfn1 } = require("./middleware/middleware");
const app = express();
require("dotenv").config();
app.use((req, res, next) => {
  //Method Porperty
  // How you can check that request type
  // console.log(req.method);
  if (req.method === "GET") {
    next();
  } else {
    res.status(400).json({
      msg: `${req.method} are not allowed`,
    });
  }
});
app.get("/shivam", mcbfn1, mcbfn2, (req, res) => {
  res.json({ hi: "msg" });
});
const PORT = process.env.PORT;
app.listen(PORT);
