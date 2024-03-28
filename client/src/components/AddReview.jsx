import { useState } from 'react'

const AddReview = () => {
  const [name, setName] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState('Rating')

  return (
    <div className='mb-2'>
      <form>
        <div className='row'>
          <div className='form-group col-8 mb-3'>
            <label htmlFor='name'>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id='name'
              placeholder='name'
              type='text'
              className='form-control'
            />
          </div>
          <div className='form-group col-4'>
            <label htmlFor='rating'></label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className='custom-select form-control col-4'
              id='rating'
            >
              <option disabled>Rating</option>
              <option value='1'>1</option>
              <option disable value='2'>
                2
              </option>
              <option disable value='3'>
                3
              </option>
              <option disable value='4'>
                4
              </option>
              <option disable value='5'>
                5
              </option>
            </select>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='Review'>Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id='Review'
            className='form-control'
          ></textarea>
        </div>
        <button className='btn btn-primary mt-2'>Submit</button>
      </form>
    </div>
  )
}

export default AddReview
