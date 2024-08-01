#!/usr/bin/env node


// src/routes/index.js


import express from "express";
const app = express();
export const indexRouter = express.Router();




/*TODO: GET home page. */

indexRouter.get('/', function (req, res) {
  //res.redirect('/catalog');
  res.json({
    msg: "Hello world!"
  })
})

export default indexRouter;
