const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  res.send({ message: 'Welcome to our server' });
});

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://onlineClass:Oky1V8oeBTvxeLaq@cluster0.dvev3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    const classItem = client.db("online-class-website").collection("classes");

    app.get("/classes", async (req, res) => {
      const result = await classItem.find().toArray();
      res.send(result);
    });

    app.post("/class", async (req, res) => {
      const data = req.body;
      console.log(data);
      const result = await classItem.insertOne(data);
      res.send(result);
    });

    app.delete('/class/:id', async (req, res) => {
      const id = req.params.id;
      console.log("Deleting class with ID:", id);

      try {
        const query = { _id: new ObjectId(id) };
        const result = await classItem.deleteOne(query);

        if (result.deletedCount === 1) {
          res.send({ message: 'Class deleted successfully' });
        } else {
          res.status(404).send({ message: 'Class not found' });
        }
      } catch (err) {
        console.error('Error deleting class:', err);
        res.status(500).send({ message: 'Failed to delete class', error: err.message });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
