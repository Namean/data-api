# data-api

API for my data

.schema <table_name>

.header on
.mode column

```sql
CREATE TABLE IF NOT EXISTS "albums"
(
  [AlbumId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  [Title] NVARCHAR(160) NOT NULL,
  [ArtistId] INTEGER NOT NULL,
  FOREIGN KEY ([ArtistId]) REFERENCES "artists" ([ArtistsId])
      ON DELETE NO ACTION ON UPDATE NO ACTION

);

CREATE INDEX [IFK_AlbumArtistId] ON "albums" ([ArtistId]);

```

pragma table_info('albums')

Getting the sturcture of a table using the SQL statement

```sql
SELETECT sql
FROM sqlite_schema
WHERE name = 'albums';
```

### Foreign Key

```sql




CREATE TABLE suppliers (
  supplier_id integer PRIMARY KEY,
  supplier_name text NOT NULL,
  group_id integer NOT NULL
);

CREATE TABLE supplier_groups {
  group_id integer PRIMARY KEY,
  group_name text NOT NULL
}
```

```sql

DROP TABLE suppliers;

CREATE TABLE suppliers (
  supplier_id integer PRIMARY KEY,
  supplier_name text NOT NULL,
  group_id integer NOT NULL
);

```
