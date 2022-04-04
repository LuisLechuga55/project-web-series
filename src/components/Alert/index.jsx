export const Alert = ({ type, message }) => {
  return (
    <div className={`alert alert-${type}`}>
      <i className='fas fa-info-circle' /> {message}
    </div>
  )
}
