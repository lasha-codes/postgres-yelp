require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()

app.use(express.json())
app.use(cors())

// get all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM restaurants')
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    })
  } catch (err) {
    console.log(err)
  }
})

// get a restaurant
app.get('/api/v1/restaurants/:id', async (req, res) => {
  const { id } = req.params
  try {
    const restaurant = await db.query(
      'SELECT * FROM restaurants WHERE id = $1',
      [id]
    )
    const reviews = await db.query(
      'SELECT * FROM reviews where restaurant_id = $1',
      [req.params.id]
    )
    res.status(200).json({
      status: 'success',
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    })
  } catch (err) {
    console.log(err)
  }
})

// create a restaurant
app.post('/api/v1/restaurants', async (req, res) => {
  console.log(req.body)

  try {
    const results = await db.query(
      'INSERT INTO restaurants (name, location, price_range) values($1, $2, $3) returning *',
      [req.body.name, req.body.location, req.body.price_range]
    )
    res.json({
      status: 'success',
      data: {
        restaurant: results.rows[0],
      },
    })
  } catch (err) {
    console.log(err)
  }
})

// update a restaurant
app.put('/api/v1/restaurants/:id', async (req, res) => {
  try {
    const results = await db.query(
      'UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *',
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    )
    console.log(results)
    res.status(200).json({
      status: 'success',
      data: {
        restaurant: results.rows[0],
      },
    })
    console.log(req.params.id)
    console.log(req.body)
  } catch (err) {
    console.log(err)
  }
})

// delete restaurant
app.delete('/api/v1/restaurants/:id', async (req, res) => {
  try {
    const results = await db.query('DELETE FROM restaurants where id = $1', [
      req.params.id,
    ])

    res.status(204).json({
      status: 'success',
    })
  } catch (err) {
    console.log(err)
  }
})

app.post('/api/v1/restaurants/:id/addReview', async (req, res) => {
  try {
    const addedReview = await db.query(
      'INSERT INTO reviews (restaurant_id, name, review, rating) values($1, $2, $3, $4) returning *;',
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    )
    console.log(addedReview)
    res.status(201).json({
      status: 'success',
      data: {
        review: addedReview.rows[0],
      },
    })
  } catch (err) {
    console.log(err)
  }
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`server is up and listening on ${port}`)
})
