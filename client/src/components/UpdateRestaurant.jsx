import { useParams } from 'react-router-dom'

const UpdateRestaurant = () => {
  const { id } = useParams()
  return (
    <div className='px-5'>
      <form className='form-group row gap-3'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input id='name' className='form-control' type='text' />
        </div>
        <div className='form-group'>
          <label htmlFor='location'>Location</label>
          <input id='location' className='form-control' type='text' />
        </div>
        <div className='form-group'>
          <label htmlFor='price_range'>Price Range</label>
          <input id='price_range' className='form-control' type='number' />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default UpdateRestaurant
