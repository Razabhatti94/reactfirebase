
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import BestSeller from './Pages/BestSeller'
import Products from './Pages/Products'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Auth from './Pages/Auth'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'

function App() {


  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' index element={<Home/>} />
          <Route path='/bestseller' element={<BestSeller/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/auth/signin' element={<SignIn/>}/>
            <Route path='/auth/signup' element={<SignUp/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
     
    
  )
}

export default App
