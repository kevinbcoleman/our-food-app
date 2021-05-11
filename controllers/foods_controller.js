const express = require('express')
const foods = express.Router()
const Food = require('../models/foods.js')
const foodSeed = require('../models/food_seed.js')

foods.get('/', (req, res) => {
  Food.find({}, (err, foundFoods) => {
    res.json(foundFoods)
  })
})

foods.post('/', (req, res) => {
  Food.create(req.body, (err, createFood) => {
    Food.find({}, (err, foundFood) => {
      res.json(foundFood)
    })
  })
})

// foods.get('/seed', (req, res) => {
//   Food.insertMany(foodSeed, (err, manyFoods) => {
//     res.redirect('/foods')
//   })
// })

foods.put('/:id', (req, res) => {
  Food.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedFood) => {
      if (err) {
        res.send(err)
      } else {
        Food.find({}, (err, foundFoods) => {
          res.json(foundFoods)
        })
      }
    }
  )
})

foods.delete('/:id', (req, res) => {
  Food.findByIdAndRemove(req.params.id, (err, deletedFood) => {
    //can put if err to check the error here
    Food.find({}, (err, foundFoods) => {
      // or error check here
      res.json(foundFoods)
    })
  })
})

module.exports = foods
