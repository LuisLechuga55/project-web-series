import { Link } from 'react-router-dom'

export const HomePage = ({ image, name, rating, id, status }) => {
  return (
    <div className='listitem'>
      <div className='card'>
        <img src={image} className='card-img-top' alt={image} />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'><i className='fas fa-star' />{rating}</p>
          <p>{status}</p>
          <Link to={`singlepage/${id}`} className='btn btn-primary'>Information</Link>
        </div>
      </div>
    </div>
  )
}
