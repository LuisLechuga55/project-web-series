import { useState, useEffect } from 'react'
import { HomePage } from '../../pages/HomePage'
import { fetchShows } from '../../utils/fetchShows'

export const SearchBar = () => {
  const [searchForm, setSearchForm] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const searchHandle = (e) => {
    setSearchForm(e.target.value.toLowerCase())
  }

  const onSearchHandler = async (e) => {
    e.preventDefault()
    const searchRes = await fetchShows(searchForm)
    setSearchForm(searchRes)
    setSearchResult(searchRes)
  }

  useEffect(() => {
    const data = async () => {
      try {
        const res = await fetchShows(searchForm)
        setSearchForm(res)
      } catch (error) {
        // setError(error)
        console.log(error)
      }
    }
    Object.keys(searchForm).length === 0 && data()
  }, [])

  console.log(searchResult)

  return (
    <div className='searchbar'>
      <form className='searchbar_form'>
        <input
          type='text'
          placeholder='Search for Series'
          onChange={searchHandle}
        />
        <button
          className='btn btn-search'
          onClick={onSearchHandler}
        >
          Search
        </button>
      </form>

      <div className='homepage_list'>

        {
        searchResult &&
        searchResult.map(show => (
          <HomePage
            key={show.show.id}
            id={show.show.id}
            image={show.show.image ? show.show.image.original : 'https://cdn-icons-png.flaticon.com/512/14/14178.png'}
            status={show.show.status}
            language={show.show.language}
            name={show.show.name}
            rating={show.show.rating.average ? show.show.rating.average : 'No rating'}
          />
        ))
      }

      </div>

    </div>
  )
}
