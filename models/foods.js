const mongoose = require('mongoose')
const foodSchema = new mongoose.Schema({
  name: String,
  image: { type:String, default: 'https://via.placeholder.com/150' },
  description: String,
})
const Food = mongoose.model('Food', foodSchema)
module.exports = Food
