import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const SinglePage = () => {
  const params = useParams()
  const [singleSeries, setSingleSeries] = useState({})

  useEffect(() => {
    const fetchSingleData = async () => {
      const data = await window.fetch(`https://api.tvmaze.com/shows/${params.id}`)
      const parsedData = await data.json()
      setSingleSeries(parsedData)
    }
    fetchSingleData()
  }, [params.id])

  let rating = singleSeries.rating
  if (rating) {
    rating = singleSeries.rating.average
    if (rating === null) {
      rating = 'Sin rating'
    }
  }

  function removeTags (str) {
    if ((str === null) || (str === '')) { return false } else { str = str.toString() }
    return str.replace(/(<([^>]+)>)/ig, '')
  }

  return (
    <>

      <div className='singleshow'>
        <img className='img-fluid' src={singleSeries.image ? singleSeries.image.original : 'https://cdn-icons-png.flaticon.com/512/14/14178.png'} alt='' />

        <div className='singleshow-info'>
          <h1>{singleSeries.name}</h1>
          {singleSeries.genres && singleSeries.genres.map(genre =>
            <span key={genre} className='singleshow-genre'><strong>{genre}</strong></span>
          )}
          <p>
            <strong>Status: </strong>{singleSeries.status ? singleSeries.status : 'Sin Status'}
          </p>
          <p>
            <strong>Rating: </strong>{rating || 'Sin Rating'}
          </p>
          <p>
            <strong>Official Web: </strong>{singleSeries.officialSite ? (<a href={singleSeries.officialSite} target='_blank' rel='noreferrer'>{singleSeries.officialSite}</a>) : ('No Pagina Web')}
          </p>
          <hr />
          <p>{singleSeries.summary && removeTags(singleSeries.summary)}</p>
        </div>
      </div>
    </>
  )
}
