import './App.css' 
import About from './components/About/About'
import Clients from './components/Clients/Clients'
import Footer from './components/Footer/Footer'
import HeroSection from './components/Hero-section/HeroSection'
import Navbar from './components/Navbar/Navbar'
import ServiceSection from './components/Our-Services/Services'
import ProcessSection from './components/Process-Section/ProcessSection'
import StatSection from './components/State/State'
import Testimonials from './components/Testimonials/Testimonials'

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
