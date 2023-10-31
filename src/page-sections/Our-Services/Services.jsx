import React, { useEffect } from "react";
// import customized_conatct_list_icon from "./../../assets/customized-contact-list-icon.svg";
import customized_conatct_list_icon from "./../../assets/images/customized-contact-list-icon.svg";
import email_marketing_icon from "./../../assets/images/email-marketing-icon.svg";
import cold_email_outreach_icon from "./../../assets/images/cold-email-outreach-icon.svg";
import administrative_support_icon from "./../../assets/images/administrative-support-icon.svg";
import linkedin_outreach_icon from "./../../assets/images/linkedin-outreach-icon.svg";
import web_analytics_icon from "./../../assets/images/web-analytics-icon.svg";
import SideImage from "./../../assets/images/About11.svg";
// import Image from "next/image"; 
import AOS from 'aos';
import 'aos/dist/aos.css';
const services = [
  {
    name: "Customize Contact List",
    description:
      "Get ahead of the competition with personalized, high-quality leads that are tailored to your business...",
    icon: customized_conatct_list_icon,
    iconBackground: "#7AFCD0",
    href: "customized-contact-list-development",
  },
  {
    name: "Email Marketing",
    description:
      "Elevate your email campaigns with expertly crafted, engaging content that drives conversions and ROI...",
    icon: email_marketing_icon,
    iconBackground: "#CDBCFF",
    href: "email-marketing-service",
  },
  {
    name: "Cold Email Outreach",
    description:
      "Stand out from the crowd with highly effective cold email outreach. We'll help you generate leads and...",
    icon: cold_email_outreach_icon,
    iconBackground: "#FFB8D1",
    href: "cold-email-marketing-service",
  },
  {
    name: "LinkedIn Outreach",
    description:
      "Connect with potential customers and build your network through strategic LinkedIn outreach. Our team...",
    icon: linkedin_outreach_icon,
    iconBackground: "#F8FF9B",
    href: "linkedIn-outreach-service",
  },
  {
    name: "Administrative Support",
    description:
      "Under this service, we will provide- Social Media page management, Website Analytics, Blogs upload...",
    icon: administrative_support_icon,
    iconBackground: "#CDBCFF",
    href: "virtual-assistant-service",
  },
  {
    name: "Web Analytics",
    description:
      "Our Google Analytics service includes account setup and management, audit reporting and consulting...",
    icon: web_analytics_icon,
    iconBackground: "#7AFCD0",
    href: "web-analytics-service",
  },
];

export default function ServiceSection() {
  useEffect(() => {
    AOS.init();  
  }, []);
 
  return (
    <React.Fragment>
      <div className="px-4 lg:px-12 my-5 py-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-1 md:gap-x-12 gap-y-8 lg:gap-y-16 text-center lg:text-start  sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div data-aos="fade-up-right">
            <h1 className=" mt-4 lg:mt-4 text-[28px] lg:text-[35px] leading-[40px] lg:leading-[48px] font-semibold trackin-wide text-black capitalize font-heading">
              What we offer to our clients ?
            </h1>
            <div className="hidden md:block md:pt-[50px]">
              <img
                src={SideImage}
                className="h-full w-full text-white"
                width={400}
                height={700}
              />
            </div>
          </div>

          <dl data-aos="fade-up-left" className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {services.map((service) => (
              <div
              data-aos="flip-left"
                key={service.name}
                className="shadow-[8px_34px_70px_-6px_rgba(7,_12,_15,_0.05)] rounded-2xl bg-white p-8"
              >
                <dt className="mb-4 flex items-center justify-center lg:justify-start text-base font-semibold leading-7 text-gray-900">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${service.iconBackground}`,
                    }}
                  >
                    <img src={service.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">{service.name}</div>
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {service.description}
                </dd>
                <dd>
                  <button
                    className='bg-[#b19af5] text-white hover:bg-sky-300 mt-4 px-2.5 py-1 rounded-lg'
                    >
                      {/* onClick={() => handleServicePage(service.href)} */}
                    <div className="flex items-center">
                      <span className="font-medium">Get Started</span>
                      <svg
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="#fff"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </React.Fragment>
  );
}
