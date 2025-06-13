import React from 'react'
import AboutUs from './pages/AboutUs'
import AboutPageTwo from './components/AboutPageTwo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  

  return (
    <>
       <BrowserRouter>
                {/* <TopBar/>
                <Navbar/> */}
                <Routes>
                  {/* <Route path='/' element={<Home />}/>     */}
                  <Route path='/about' element={<AboutUs />}/>    
                  <Route path='/about-2' element={<AboutPageTwo />}/>    
                </Routes>
                <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
