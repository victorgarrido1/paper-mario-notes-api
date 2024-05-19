const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vgarrido009:Ocv4RMfnqWhl9TQO@papermarionotes.jmlrwvi.mongodb.net/?retryWrites=true&w=majority&appName=PaperMarioNotes";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return client;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit the process with an error code
  }
}

module.exports = connectDB;
