import { useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'

const RestaurantList = () => {
  useEffect(() => {
    try {
      const response = RestaurantFinder.get('/').then((response) => {
        console.log(response)
      })
    } catch (err) {
      console.log(err)
    }
  }, [])

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
          <tr>
            <td>mcdonald</td>
            <td>New York</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className='btn btn-warning'>Update</button>
            </td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>

          <tr>
            <td>mcdonald</td>
            <td>New York</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className='btn btn-warning'>Update</button>
            </td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList
