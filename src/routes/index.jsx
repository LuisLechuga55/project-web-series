import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { SearchBar } from '../components/SearchBar'
import { AboutPage } from '../pages/AboutPage'
import { HomePage } from '../pages/HomePage'
import { SinglePage } from '../pages/Singlepage'

export const Paths = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='' element={<SearchBar />} />
        <Route exact path='' element={<HomePage />} />
        <Route exact path='about' element={<AboutPage />} />
        <Route path='singlepage/:id' element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  )
}
