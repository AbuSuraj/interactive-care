
import './App.css'
import Navbar from './page-sections/Navbar/Navbar';
import HeroSection from './page-sections/Hero-section/HeroSection';
import Clients from './page-sections/Clients/Clients';
import ServiceSection from './page-sections/Our-Services/Services';
import ProcessSection from './page-sections/Process-Section/ProcessSection';
import About from './page-sections/About/About';
import StatSection from './page-sections/State/State';
import Testimonials from './page-sections/Testimonials/Testimonials';
import Footer from './page-sections/Footer/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <Navbar />
      <Element id="hero">
        <HeroSection />
      </Element>
      <Element id="clients">
        <Clients />

      </Element>
      <Element id="services">
        <ServiceSection />

      </Element>
      <Element id="process">
        <ProcessSection />

      </Element>
      <Element id="about">
        <About />

      </Element>
      <Element id="stats">
        <StatSection />

      </Element>
      <Element id="testimonials" >
        <Testimonials />

      </Element>
      <Footer />
    </div>
  );
}

export default App;
 