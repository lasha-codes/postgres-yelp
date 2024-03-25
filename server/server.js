require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())

// get all restaurants
app.get('/api/v1/restaurants', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { restaurants: ['restaurant', 'man', 'mcdonald', 'wendy'] },
  })
})

// get a restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params)

  res.status(200).json({
    status: 'success',
    data: {
      restaurant: 'mcdonald',
    },
  })
})

// create a restaurant
app.post('/api/v1/restaurants', (req, res) => {
  res.json({
    status: 'success',
    data: {
      restaurant: 'mcdonald',
    },
  })
})

// update a restaurant
app.put('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: 'macdonald',
    },
  })
})

// delete restaurant

app.delete('/api/v1/restaurants/:id', (req, res) => {
  res.status(204).json({
    status: 'success',
  })
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`server is up and listening on ${port}`)
})
