import express from "express";
import cors from "cors";
const app = express();
const PORT = 8081;
import path from "express";
app.use(express.static("public"));
import * as _child from 'child_process';
const child = _child.spawn('get-ip');
import indexRouter from './src/routes/index.js';

app.use(express.static("public"));
// app.use(express.static("img"));
// app.use(express.static("files"));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const __dirname = "/Users/allspark/Documents/src/data-api/";

app.use('/', indexRouter);

/*
app.get("/", (req, res) => {
  res.json({
    msg: "data-api is functioning correctly!",
  });
});
*/
app.get("/html", cors(), (req, res) => {
  res.sendFile(__dirname + "./html/example.json");
});

app.get("/json", cors(), (req, res) => {
  res.sendFile(__dirname + "./json/example.json");
});

app.listen(PORT, () =>
  //console.log(`API is running on http://172.16.150.189:${PORT}/login`));
  child.stdout.on('data', (data) => {
    console.log(`API is running at http://${String(data).split('/')[0]}:${PORT}`);
  })
);
