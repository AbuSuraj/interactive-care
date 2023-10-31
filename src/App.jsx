import './App.css' 
import About from './page-sections/About/About'
import Clients from './page-sections/Clients/Clients'
import Footer from './page-sections/Footer/Footer'
import HeroSection from './page-sections/Hero-section/HeroSection'
import Navbar from './page-sections/Navbar/Navbar'
import ServiceSection from './page-sections/Our-Services/Services'
import ProcessSection from './page-sections/Process-Section/ProcessSection'
import StatSection from './page-sections/State/State'
import Testimonials from './page-sections/Testimonials/Testimonials' 

function App() { 

  return (
    <>
       <Navbar></Navbar>
       <HeroSection></HeroSection>
       <Clients></Clients>
       <ServiceSection></ServiceSection>
       <ProcessSection></ProcessSection>
       <About></About>
       <StatSection></StatSection>
       <Testimonials></Testimonials>
       <Footer></Footer>
    </>
  )
}

export default App
