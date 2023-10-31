import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../../assets/images/logo.png"; 
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='h-12 flex justify-between items-center 
     mx-auto px-4 bg-slate-100'>
      <div className="flex items-center justify-center md:justify-start cursor-pointer hover:bg-slate-200 hover:rounded-3xl">
            <img src={logo} className="w-7 h-7 rounded-full" alt="Logo" />
            <h5 className="ml-2 text-2xl text-fuchsia-500 tracking-wider">DigitalDynamo</h5>
          </div>
      {/* <h1 className='text-3xl font-bold text-[#00df9a] cursor-pointer'>DigitalDynamo</h1> */}
      <ul className='hidden md:flex md:content-between'>
        <a href='#hero' className='p-2  cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Home</a>
        <a href='#clients' className='p-2  cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Our Clients</a>
        <a href='#services' className='p-2  cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Services</a>
        <a href='#process' className='p-2  cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Process</a>
        <a href='#about' className='p-2  cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>About</a>
        <a href='#stats' className='p-2  cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Stats</a>
        <a href='#testimonials' className='p-2  cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Testimonials</a>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed  z-[100] left-0 top-0 w-[65%] h-full md:hidden  border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 cursor-pointer'>DigitalDynamo</h1>
          <a href='#hero'  className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black   hover:bg-slate-200 hover:rounded-3xl'>Home</a>
          <a href='#clients' className='p-4 text-center text-white border-b border-gray-600 cursor-pointer  hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Our Clients</a>
          <a href='#services'  className='p-4 text-center text-white border-b border-gray-600 cursor-pointer  hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Services</a>
          <a href='#process' className='p-4 text-center text-white border-b border-gray-600 cursor-pointer  hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Process</a>
          <a href='#about' className='p-4 text-center text-white border-b border-gray-600 cursor-pointer  hover:text-black hover:bg-slate-200 hover:rounded-3xl'>About</a>
          <a href='#stats' className='p-4 text-center text-white border-b border-gray-600 cursor-pointer  hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Stats</a>
          <a href='#testimonials' className='p-4 text-center text-white border-b border-gray-600 cursor-pointer  hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Testimonials</a>
      </ul>
    </div>
  );
};

export default Navbar;

// import { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import logo from "../../assets/images/logo.png"; 

// import PropTypes from 'prop-types';

// Navbar.propTypes = {
//   aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
//   clientsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
//   serviceRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
//   processRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
//   statRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
//   testimonialsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
//   footerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
// };

// const Navbar = ({
//   aboutRef,
//   clientsRef,
//   serviceRef,
//   processRef,
//   statRef,
//   testimonialsRef,
//   footerRef,
// }) => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: 'smooth' });
//     setNav(false); // Close the mobile menu
//   };

//   return (
//     <div className='h-12 flex justify-between items-center mx-auto px-4 bg-slate-100'>
//       <div className="flex items-center justify-center md:justify-start cursor-pointer hover:bg-slate-200 hover:rounded-3xl">
//         <img src={logo} className="w-7 h-7 rounded-full" alt="Logo" />
//         <h5 className="ml-2 text-2xl text-fuchsia-500 tracking-wider">DigitalDynamo</h5>
//       </div>
//       <ul className='hidden md:flex md:content-between'>
//         <li onClick={() => scrollToSection(aboutRef)} className='p-2 cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>About</li>
//         <li onClick={() => scrollToSection(clientsRef)} className='p-2 cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Clients</li>
//         <li onClick={() => scrollToSection(serviceRef)} className='p-2 cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Service</li>
//         <li onClick={() => scrollToSection(processRef)} className='p-2 cursor-pointer hover-bg-slate-200 hover:rounded-3xl'>Process</li>
//         <li onClick={() => scrollToSection(statRef)} className='p-2 cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Stat</li>
//         <li onClick={() => scrollToSection(testimonialsRef)} className='p-2 cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Testimonials</li>
//         <li onClick={() => scrollToSection(footerRef)} className='p-2 cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Footer</li>
//       </ul>
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>
//       <ul className={nav ? 'fixed z-[100] left-0 top-0 w-[65%] h-full md:hidden border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
//         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 cursor-pointer'>DigitalDynamo</h1>
//         <li onClick={() => scrollToSection(aboutRef)} className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black hover:bg-slate-200 hover:rounded-3xl'>About</li>
//         <li onClick={() => scrollToSection(clientsRef)} className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Clients</li>
//         <li onClick={() => scrollToSection(serviceRef)} className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Service</li>
//         <li onClick={() => scrollToSection(processRef)} className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Process</li>
//         <li onClick={() => scrollToSection(statRef)} className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Stat</li>
//         <li onClick={() => scrollToSection(testimonialsRef)} className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Testimonials</li>
//         <li onClick={() => scrollToSection(footerRef)} className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Footer</li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

// import   { useState } from 'react';
// import {   ScrollLink } from 'react-scroll';
// import logo from "../../assets/images/logo.png";
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className='h-12 flex justify-between items-center mx-auto px-4 bg-slate-100'>
//       <div className="flex items-center justify-center md:justify-start cursor-pointer hover:bg-slate-200 hover:rounded-3xl">
//         <img src={logo} className="w-7 h-7 rounded-full" alt="Logo" />
//         <h5 className="ml-2 text-2xl text-fuchsia-500 tracking-wider">DigitalDynamo</h5>
//       </div>
//       <n className='hidden md:flex md:content-between'>
//         <li className='p-2 cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>
//         <ScrollLink  to="hero" smooth={true} duration={500}>Home</ScrollLink>
//         </li>
//         <li className='p-2 cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>
//           <ScrollLink to="clients" smooth={true} duration={500}>Our Clients</ScrollLink>
//         </li>
//         <li className='p-2 cursor-pointer hover-bg-slate-200 hover:rounded-3xl'>
//           <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
//         </li>
//         <li className='p-2 cursor-pointer hover-bg-slate-200 hover:rounded-3xl'>
//           <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
//         </li>
//         <li className='p-2 cursor-pointer hover-bg-slate-200 hover:rounded-3xl'>
//           <ScrollLink to="stats" smooth={true} duration={500}>Stats</ScrollLink>
//         </li>
//         <li className='p-2 cursor-pointer hover-bg-slate-200 hover:rounded-3xl'>
//           <ScrollLink to="testimonials" smooth={true} duration={500}>Testimonials</ScrollLink>
//         </li>
//         <li className='p-2 cursor-pointer hover-bg-slate-200 hover:rounded-3xl'>
//           <ScrollLink to="testimonials" smooth={true} duration={500}>Contact</ScrollLink>
//         </li>
//       </n>
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
//       </div>
//       <ul className={nav ? 'fixed z-[100] left-0 top-0 w-[65%] h-full md:hidden border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
//         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 cursor-pointer'>DigitalDynamo</h1>
//         <li className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black hover-bg-slate-200 hover:rounded-3xl'>
//           <ScrollLink to="hero" smooth={true} duration={500}>Home</ScrollLink>
//         </li>
//         <li className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black hover-bg-slate-200 hover:rounded-3xl'>
//           <ScrollLink to="clients" smooth={true} duration={500}>Company</ScrollLink>
//         </li>
//         <li className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black hover-bg-slate-200 hover:rounded-3xl'>
//           <ScrollLink to="services" smooth={true} duration={500}>Resources</ScrollLink>
//         </li>
//         <li className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black hover-bg-slate-200 hover:rounded-3xl'>
//           <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
//         </li>
//         <li className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black hover-bg-slate-200 hover:rounded-3xl'>
//           <ScrollLink to="testimonials" smooth={true} duration={500}>Contact</ScrollLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
