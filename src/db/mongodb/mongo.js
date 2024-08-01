import { MongoClient } from "mongodb";

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("test");
    const movies = database.collection("resources");

    // Query for a movie that has the title 'Back to the Future'
    const query = { group_id: 1 };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensure that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
