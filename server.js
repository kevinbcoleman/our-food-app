const express = require('express')
const mongoose = require('mongoose')


const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

const foodsController = require('./controllers/foods_controller.js')
app.use(express.static('public'))
app.use(express.json())
app.use('/foods', foodsController)



// app.get('/', (req, res) => {
//   res.send("hello World")
// })


app.listen(PORT, () => {
  console.log('listening on port', PORT);
})


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
mongoose.connection.on('error', (err) =>
  console.log(
    err.message,
    'is mongod not running?/Problem with Atlas connection?'
  )
)
mongoose.connection.on('connected', () => {
  console.log('mongo connected ', MONGODB_URI)
})
mongoose.connection.on('disconnected', () => {
  console.log('mongo disconnected')
})
