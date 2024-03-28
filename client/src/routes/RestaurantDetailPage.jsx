/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder'
import Reviews from '../components/Reviews'

const RestaurantDetailPage = () => {
  const { id } = useParams()
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`)
        setSelectedRestaurant(response.data.data.restaurant)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='p-5'>
      {selectedRestaurant && (
        <>
          <div className='mt-3'>
            <Reviews />
          </div>
        </>
      )}
    </div>
  )
}

export default RestaurantDetailPage
