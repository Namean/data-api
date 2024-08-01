import express from "express";
import cors from "cors";
import * as _child from 'child_process';
import indexRouter from './routes/index.js';
import AuthRouter from './routes/Auth.router.js';
import path from 'path';

const app = express();
const PORT = 8081;

const child = _child.spawn('get-ip');
const __dirname = "/Users/allspark/Documents/src/data-api/public";

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



app.use('/', indexRouter);
app.use('auth', AuthRouter);

app.get("/status", (req, res) => {
  res.json({
    msg: "data-api is functioning correctly!",
  });
});

app.get("/html", cors(), (req, res) => {
  //res.sendFile(__dirname + "/html/example.html");
  /*
  const options = { root: path.join(__dirname) }

  const file_name = 'example.html';

  res.sendFile(file_name, options, function (err) {
    if (err) {
      console.error('Error sending file:', err);
    } else {
      console.log('Sent', file_name);
    }
  })
  */
  res.sendFile("/home/desmond/Documents/src/repos/data-api/public/html/example.html")

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
