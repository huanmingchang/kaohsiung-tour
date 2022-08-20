import './styles/App.css'
import Home from './components/Home.js'
import FAQ from './components/FAQ.js'
import Tour from './components/Tour.js'
import TourList from './components/TourList.js'
import TourDetails from './components/TourDetails.js'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className='header'>
        <div className='title'>Kaohsiung Tour</div>
        <nav>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='faq'>FAQ</Link>
          </li>

          <li>
            <Link to='tour'>Tour</Link>
          </li>
        </nav>
      </header>

      <div className='content'>
        <Outlet />
      </div>
      <footer className='footer'>Footer</footer>
    </>
  )
}

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='tour' element={<Tour />}>
            <Route index element={<TourList />} />
            <Route path=':id' element={<TourDetails />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
export default App
