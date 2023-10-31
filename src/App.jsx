import './App.css'
import Example from './components/Clients/Clients'
import Footer from './components/Footer/Footer'
import HeroSection from './components/Hero-section/HeroSection'
import Navbar from './components/Navbar/Navbar'

function App() { 

  return (
    <>
       <Navbar></Navbar>
       <HeroSection></HeroSection>
       <Example></Example>
       <Footer></Footer>
    </>
  )
}

export default App
