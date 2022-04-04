import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>

        <Link to='/' className='navbar_nav' href='#'><i className='fas fa-video' />Portal Series</Link>

        <div className='nav_links' id='navbarSupportedContent'>

          <li className='links_link'>
            <Link to='/' className='nav-link active' aria-current='page' href='#'>HOME</Link>
          </li>

          <li className='links_link'>
            <Link to='/about' className='nav-link active' aria-current='page' href='#'>ABOUT</Link>
          </li>

        </div>

      </div>

    </nav>
  )
}

// https://api.tvmaze.com/search/shows?q=girls
// https://api.tvmaze.com/shows/1
// https://api.tvmaze.com/shows/1?embed=cast

/*
<form className='d-flex'>
<input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
<button className='btn btn-outline-success' type='submit'>Search</button>
</form>
*/
