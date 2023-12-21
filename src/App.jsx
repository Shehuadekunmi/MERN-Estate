import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import Signin from './pages/Signin'
import Singup from './pages/Singup'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'


function App() {

  return (
    <>
    <h1>hello</h1>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/signup' element={<Singup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/listing/:listingId' element={<Listing/>}/>
        <Route  element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/createlisting' element={<CreateListing/>}/>          
          <Route path='/updatelisting/:listingId' element={<UpdateListing/>}/>          
        </Route>
        <Route path='/about' element={<About/>}/>
      </Routes>
     </Router>
      
    </>
  )
}

export default App
