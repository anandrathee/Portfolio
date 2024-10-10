import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Strips from './Components/Strips'
import About from './Components/About'
import Services from './Components/Services'
import MyProjects from './Components/MyProjects'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
// import Test from './Components/Test'



const App = () => {
  return (
    <div className='w-full h-full overflow-hidden'>
      <Navbar/>
      <Home/>
      <Strips/>
      <About/>
      <Services/>
      <MyProjects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      {/* <Test/> */}
     
      
    </div>
  )
}

export default App