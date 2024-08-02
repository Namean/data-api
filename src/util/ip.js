
import * as _child from 'child_process';
const get_ip = `ip a | grep "int " | grep -Fv 127.0.0.1 | awk '{print $2}'`;
const child = _child.spawn("ip a | grep 'inet ' | grep -Fv 127.0.0.1 | awk '{print $2}'", { shell: true });
const PORT = 8000;



export function ip() {
  child.stdout.on('data', (data) => {
    //return `${process.env.local_ip}:${process.env.PORT}` ?? `localhost:${PORT}`
    console.log(String(data).split('/')[0]);
  })
}

