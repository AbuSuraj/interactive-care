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
        <li className='p-2  cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Home</li>
        <li className='p-2  cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Company</li>
        <li className='p-2  cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Resources</li>
        <li className='p-2  cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>About</li>
        <li className='p-2  cursor-pointer hover:bg-slate-200 hover:rounded-3xl'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed  z-[100] left-0 top-0 w-[65%] h-full md:hidden  border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 cursor-pointer'>DigitalDynamo</h1>
          <li  className='p-4 text-center text-white border-b border-gray-600 cursor-pointer hover:text-black   hover:bg-slate-200 hover:rounded-3xl'>Home</li>
          <li className='p-4 text-center text-white border-b border-gray-600 cursor-pointer  hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Company</li>
          <li className='p-4 text-center text-white border-b border-gray-600 cursor-pointer  hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Resources</li>
          <li className='p-4 text-center text-white border-b border-gray-600 cursor-pointer  hover:text-black hover:bg-slate-200 hover:rounded-3xl'>About</li>
          <li className='p-4 text-center text-white border-b border-gray-600 cursor-pointer  hover:text-black hover:bg-slate-200 hover:rounded-3xl'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
