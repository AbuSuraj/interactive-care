// import { useState } from "react";
import airbnb from '../../assets/images/airbnb.svg'
import google from '../../assets/images/google.svg'
import microsoft from '../../assets/images/microsoft.svg'
import shopify from '../../assets/images/shopify.svg'
import mail from '../../assets/images/mail.svg'
import mashable from '../../assets/images/mashable.svg' 
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const companies = [airbnb,google,microsoft,shopify,mail,mashable]
export default function Clients() { 
  useEffect(() => {
    AOS.init();  
  }, []);
 const title="Trusted over 200+ Companies"
  return (
    <section
      className='bg-white font-inter my-10' 
    >
      <div data-aos="fade-right" className="bg-[#edf8fc] lg:px-32 px-4">
        <div className="p-10 px-8 sm:mt-0">
          <div className=" lg:py-8 ">
            <h1 className="capitalize font-heading font-semibold leading-[40px] lg:leading-[48px] lg:text-[35px] pb-10 text-[28px] text-black text-center trackin-wide">
              {title}
            </h1>
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
              {companies &&
                companies.length > 0 &&
                companies.map((company, index) => {
                  return (
                    <a
                      href="#"
                      key={index}
                      className="flex justify-center items-center"
                    >
                     <img className='hover:bg-slate-200 p-3' src={company} alt="company" /> 
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
