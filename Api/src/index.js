const express = require('express')

const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set("strictQuery", false);

const cors = require('cors')
const router = require('./Routes/Router')

const app = express()

const dbUri = process.env.DB_URI

mongoose.connect(
  dbUri,
  {
    UseUnifiedTopology: true,
    useNewUrlParser: true
  },
  () => console.log('Connected to database')
)
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'));

app.use(router)

app.listen(3333, () => console.log('Server running on port 3333'))
