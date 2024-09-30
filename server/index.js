const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')

const port = process.env.PORT || 8000

// middleware
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],

}

app.use(express.json())
app.use(cors())

// console.log(process.env.DB_PASS);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bomlehy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

async function run() {
    try {

        const roomsCollection = client.db("AirbnbDB").collection('rooms');

        //  get all rooms from db
        app.get('/rooms', async (req, res) => {
            const category = req.query.category;
            // console.log(category);
            let query = {};
            if (category && category !== 'null') query = { category }
            const result = await roomsCollection.find(query).toArray();
            res.send(result)
        })


        // Send a ping to confirm a successful connection
        await client.db('admin').command({ ping: 1 })
        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!'
        )
    } finally {
        // Ensures that the client will close when you finish/error
    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Hello from Airbnb Server..')
})

app.listen(port, () => {
    console.log(`Airbnb is running on port ${port}`)
})
