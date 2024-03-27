/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'

const UpdateRestaurant = () => {
  const { id } = useParams()

  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`)
      const { restaurant } = response.data.data
      setName(restaurant.name)
      setLocation(restaurant.location)
      setPriceRange(restaurant.price_range)
    }
    fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    })
    navigate('/')
  }

  return (
    <div className='px-5'>
      <form className='form-group row gap-3'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id='name'
            className='form-control'
            type='text'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='location'>Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id='location'
            className='form-control'
            type='text'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price_range'>Price Range</label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            id='price_range'
            className='form-control'
            type='number'
          />
        </div>
        <button
          type='submit'
          onClick={handleSubmit}
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default UpdateRestaurant
