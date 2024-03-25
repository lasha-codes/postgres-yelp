require('dotenv').config()
const express = require('express')

const app = express()

// get all restaurants
app.get('/api/v1/restaurants', (req, res) => {
  res.status(404).json({
    status: 'success',
    data: { restaurants: ['restaurant', 'man', 'mcdonald', 'wendy'] },
  })
})

// get a restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params)
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`server is up and listening on ${port}`)
})
