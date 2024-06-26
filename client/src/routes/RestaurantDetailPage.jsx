/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder'
import Reviews from '../components/Reviews'
import AddReview from '../components/AddReview'

const RestaurantDetailPage = () => {
  const { id } = useParams()
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`)
        console.log(response)
        setSelectedRestaurant(response.data.data)
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
          <h1 className='text-center display-1'>
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className='mt-3'>
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  )
}

export default RestaurantDetailPage
