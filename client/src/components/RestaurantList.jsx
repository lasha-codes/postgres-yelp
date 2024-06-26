/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import { useNavigate } from 'react-router-dom'

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get('/')
        setRestaurants(response.data.data.restaurants)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  const handleDelete = async (id) => {
    try {
      await RestaurantFinder.delete(`/${id}`)
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id
        })
      )
    } catch (err) {
      console.error(err)
    }
  }

  const handleUpdate = (id) => {
    navigate(`/restaurants/${id}/update`)
  }

  const handleRestaurantSelect = (id) => {
    navigate(`/restaurants/${id}`)
  }

  return (
    <div className='list-group'>
      <table className='table table-hover table-dark'>
        <thead>
          <tr>
            <th scope='col'>Restaurant</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr
                  onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={restaurant.id}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{'$'.repeat(restaurant.price_range)}</td>
                  <td>reviews</td>
                  <td>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleUpdate(restaurant.id)
                      }}
                      className='btn btn-warning'
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDelete(restaurant.id)
                      }}
                      className='btn btn-danger'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList
