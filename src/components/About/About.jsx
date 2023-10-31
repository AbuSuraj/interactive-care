// import React from 'react';
// import { Link } from "react-router-dom";
import About01 from "./../../assets/images/About01.svg";
import About02 from "./../../assets/images/About02.svg";
import About03 from "./../../assets/images/About03.svg";
import About04 from "./../../assets/images/About04.svg"; 

const items = [
    {
        title: "Cold Prospecting",
        titleShort: "Cold Prospecting",
        content:
            "Our tailored cold email marketing services help you connect with your ideal audience and generate more sales. We provide personalized messaging and detailed analytics to help you refine your outreach strategy and achieve better results.",
        image: About01,
        background: "#DEF3F4",
    },
    {
        title: "Prospect Nurturing",
        titleShort: "Prospect Nurturing",
        content:
            "Transform your lead generation with our expert prospect nurturing service. We go beyond traditional lead-generation tactics to help you build meaningful relationships with your ideal customers. Our comprehensive approach generates high-quality leads that are more likely to convert into long-term business relationships.",
        image: About02,
        background: "#FFEBEF",
    },
    {
        title: "Custom-built leads to help you dominate your market",
        titleShort: "Custom-built",
        content:
            "You need leads that are tailored to your business. That's why we create customized contact lists that are designed to connect you with the right people. With our service, you'll dominate your market and achieve your business goals!",
        image: About03,
        background: "#FAE7C6",
    },
    {
        title: "Corporate relationship building",
        titleShort: "Corporate",
        content:
            "Maximize your LinkedIn outreach and transform prospects into loyal customers with our expert prospect nurturing service. We help you build trust and credibility with your audience, making it easy to generate more leads and close more sales.",
        image: About04,
        background: "#D7E4EF",
    },
];
const About = () => {
    return (
      <section>
         <section>
        <div className="relative">
          <div className="px-6 lg:px-32 pt-24 lg:pt-[140px]">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-6 lg:mb-10 text-[28px] lg:text-[35px] leading-[40px] lg:leading-[48px] font-semibold trackin-wide text-black capitalize font-heading">
                Unlock Your Business Potential with Our
                High-Speed Solutions
              </h1>
              <section>
                <div className="bg-white shadow-lg rounded-2xl py-2 md:py-4 flex gap-2 justify-between px-4 md:px-8 mb-6 lg:mb-16">
                  {items.map((item, index) => (
                    <div key={index}>
                      <a
                        className="btn text-sm md:text-base"
                        href={`#section-${index}`}
                      >
                        {item.titleShort}
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            {items.map((item, index) => (
              <section
                id={`section-${index}`}
                className={`flex flex-col ${
                  index % 2 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center justify-center pb-12 lg:pb-20 gap-16`}
                key={index}
              >
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col gap-8">
                    <h2 className="text-lg font-medium tracking-tight leading-tight text-black md:text-3xl">
                      {item.title}
                    </h2>
                    <div className="border-l-2 border-blue px-4">
                      <p className="text-base leading-7 text-gray-600">
                        {item.content}
                      </p>
                    </div>
                    <button className="w-fit bg-[#ff5d05] hover:bg-blue text-white text-base font-medium py-2 px-6 rounded-full">
                      Get Started
                    </button>
                  </div>
                </div>
                <div
                  className="w-full md:w-1/2 rounded-lg"
                  style={{
                    background: `${item.background}`,
                  }}
                >
                  <img
                    src={item.image}
                    className="w-full h-auto max-h-[500px] max-w-[450px] rounded"
                    alt="Feature Image"
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
         {/* <section>
                <div className="relative">
                    <div className="px-6 lg:px-32 pt-24 lg:pt-[140px]">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="mb-6 lg:mb-10 text-[28px] lg:text-[35px] leading-[40px] lg:leading-[48px] font-semibold trackin-wide text-black capitalize font-heading">
                                Unlock Your Business Potential with Our
                                High-Speed Solutions
                            </h1>
                            <section>
                                <div className="bg-white shadow-lg rounded-2xl py-2 md:py-4 flex gap-2 justify-between px-4 md:px-8 mb-6 lg:mb-16">
                                    {items &&
                                        items.length > 0 &&
                                        items.map((item, index) => {
                                            return (
                                                <div key={index} className="btn text-sm md:text-base">
                                                           <Link
                                                        className="btn text-sm md:text-base"
                                                        to={`#section-${index}`}
                                                    >
                                                        {item.titleShort}
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                </div>
                            </section>
                        </div>
                        {items &&
                            items.length > 0 &&
                            items.map((item, index) => {
                                return (
                                    <section
                                    key={index}
                                        id={`section-${index}`}
                                        className={`flex flex-col ${
                                            index % 2
                                                ? "md:flex-row-reverse"
                                                : "md:flex-row"
                                        } items-center justify-center pb-12 lg:pb-20 gap-16`}
                                    >
                                        <div className="w-full md:w-1/2">
                                            <div className="flex flex-col gap-8">
                                                <h2 className="text-lg font-medium tracking-tight leading-tight text-black md:text-3xl">
                                                    {item.title}
                                                </h2>
                                                <div className="border-l-2 border-blue px-4">
                                                    <p className="text-base leading-7 text-gray-600">
                                                        {item.content}
                                                    </p>
                                                </div>
                                                <button className="w-fit bg-[#ff5d05] hover:bg-blue text-white text-base font-medium py-2 px-6 rounded-full">
                                                    Get Started
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                           className="w-full md:w-1/2 rounded-lg"
                                            style={{
                                                background: `${item.background}`,
                                            }}
                                        >
                                            <img
                                                src={item.image}
                                               className="w-full h-auto max-h-[500px] max-w-[450px] rounded"
                                                alt="Feature Image"
                                            />
                                        </div>
                                    </section>
                                );
                            })}
                    </div>
                </div>
            </section> */}
      </section>
    );
};

export default About;