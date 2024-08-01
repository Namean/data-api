#!/usr/bin/env node
//import spawn from 'node:child_process';
import * as _child from 'child_process';
//const { spawn } = require('child_process');
//const child = spawn('pwd');
//const child = spawn('find', ['.', '-type', 'f'])
const child = _child.spawn('get-ip');


child.on('exit', function (code, signal) {
  console.log('child process exited with ' + `code ${code} and signal ${signal}`);
});


child.stdout.on('data', (data) => {
  console.log(`child stdout: \n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr: \n${data}`);
});
