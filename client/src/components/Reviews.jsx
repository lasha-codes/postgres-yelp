import StarRating from './StarRating'

const Reviews = () => {
  return (
    <div className='row row-cols-3 gap-3 d-flex justify-content-center mb-2 w-100'>
      <div
        className='card text-white bg-primary mb-3 mr-4'
        style={{ width: '300px' }}
      >
        <div className='card-header d-flex justify-content-between'>
          <span>Joan</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className='card-body'>
          <p className='card-text'>This restaurant was awesome</p>
        </div>
      </div>
      <div
        className='card text-white bg-primary mb-3 mr-4'
        style={{ width: '300px' }}
      >
        <div className='card-header d-flex justify-content-between'>
          <span>Joan</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className='card-body'>
          <p className='card-text'>This restaurant was awesome</p>
        </div>
      </div>
      <div
        className='card text-white bg-primary mb-3 mr-4'
        style={{ width: '300px' }}
      >
        <div className='card-header d-flex justify-content-between'>
          <span>Joan</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className='card-body'>
          <p className='card-text'>This restaurant was awesome</p>
        </div>
      </div>
      <div
        className='card text-white bg-primary mb-3 mr-4'
        style={{ width: '300px' }}
      >
        <div className='card-header d-flex justify-content-between'>
          <span>Joan</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className='card-body'>
          <p className='card-text'>This restaurant was awesome</p>
        </div>
      </div>
    </div>
  )
}

export default Reviews
