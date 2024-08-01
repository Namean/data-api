#!/usr/bin/env node


// src/routes/auth

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const AuthRouter = express.Router() ?? null;


AuthRouter.all('/', (req, res) => {
  res.redirect('/status');
});


AuthRouter.use('/login', (req, res) => {
  const token = { token: "test123" }
  res.send(token);
});


AuthRouter.use('/status', (req, res) => {
  const status = { status: "auth-api: Running on port 8080" };
  res.send(status);
})



export default AuthRouter;





