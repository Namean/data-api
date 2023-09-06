import sqlite3 from "sqlite3";

let db = new sqlite3.Database(
  "./db/chinook.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the chinook database.");
  }
);

// Querying all rows with all() method
let sql = `SELECT DISTINCT Name name FROM playlists ORDER BY name`;
// .all(sql, params, (err, rows) =>)
db.all(sql, [], (err, rows) => {
  // process rows here
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});

// Quert the first row in the result set
let sql_get = `SELECT PlaylistId id,
Name name
FROM playlists
WHERE PlaylistId  = ?`;
let playlistId = 1;
db.get(sql_get, [], (err, rows) => {
  // process the row here

  // first row only
  db.get(sql, [playlistId], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
  });
});

let sql_each = `SELECT FirstName firstName,
                  LastName lastName,
                  Email email
            FROM customers
            WHERE Country = ?
            ORDER BY FirstName`;
db.each(sql_each, ["USA"], (err, row) => {
  if (err) throw err;
  console.log(`${row.firstName} ${row.lastName} - ${row.email}`);
});

db.serialize(() => {
  db.each(
    `SELECT PlaylistId as id, Name as name FROM playlists`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + "\t" + row.name);
    }
  );
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Close the database connection.`);
});
