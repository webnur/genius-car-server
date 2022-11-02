const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const port = process.env.PORT || 5000;
const app = express();

// Middle wares
app.use(cors())
app.use(express.json());

// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASSWORD)

app.get('/', (req, res) => {
    res.send('Genius car server is Running')
})


// user: geniusBdUser
//password: U6Dv8eE7K5L2GG6D


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6x8xxck.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.listen(port, () => console.log(`server is running on port ${port}`))