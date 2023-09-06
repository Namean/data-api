import sqlite3 from "sqlite3";

let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-mmemory SQlite database');
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Close the database connection.`);
})

const config = {
  type: 'config'
  db_name: '',
  mode: '', // sqlite3.OPEN_READONLY, .OPEN_READWRITE, OPEN_CREATE
}


// async function useDiskDatabase(config) {
//   if (config.type !== 'config') return;
//   let db = new sqlite3.Database(db_name, (err) => {
//     if (err) {
//       console.error(error.message);
//     }
//     console.log(`Connected to the ${db_name} database!`)
//   })
// }

let db = new sqlite3.Database('./db/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});