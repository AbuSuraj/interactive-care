import { useEffect, useState } from "react";
import About08 from "./../../assets/images/About08.svg";
import About10 from "./../../assets/images/About10.svg";
import About11 from "./../../assets/images/About11.svg";
 
// import React from 'react';
const landingPageItems = [
    {
      title: "Higher click-through rates",
      content:
        "Higher click-through rates are just the beginning of the benefits of outbound marketing. By delivering targeted messaging and leveraging effective calls to action, we can help you increase website traffic, drive more conversions, and ultimately boost your bottom line.",
      image: About08,
    },
    {
      title: "More paying customers",
      content:
        "Generate More Qualified Leads with Outbound Marketing by directly targeting potential customers, businesses can attract qualified leads! Outbound marketing tactics such as email marketing are effective ways to generate leads for a business.",
      image: About10,
    },
    {
      title: "Quicker Results",
      content:
        "Get Faster Returns on Your Marketing Investment with Outbound Marketing. It can generate faster results than inbound marketing. By quickly generating leads and sales, businesses can see a faster return on their marketing investment with outbound marketing.",
      image: About11,
    },
  ];
const ProcessSection = () => {
   const title="How is outbound marketing the ultimate solution you need for your business?"
    
         
            const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const items =  landingPageItems
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % items.length);
      setProgress(0);
    }, 5000);

    const progressIntervalId = setInterval(() => {
      setProgress((progress) => progress + 1);
    }, 50);

    return () => {
      clearInterval(intervalId);
      clearInterval(progressIntervalId);
    };
  }, [items.length]);

  return (
     
      <div className="py-12 lg:py-16">
        <div
          className= 'bg-[#edf8fc] lg:px-32 py-20 px-4 "landing" ? "mt-20 md:mt-40" ' 
           
        >
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-[28px] lg:text-[35px] leading-[40px] lg:leading-[48px] font-semibold trackin-wide text-black capitalize font-heading">
              {title}
            </h1>
          </div>
          <div className="mx-auto mt-12  flex max-w-2xl flex-col gap-16 ring-1 ring-white/10 sm:rounded-3xl lg:mx-0 lg:max-w-none lg:flex-row lg:items-center xl:gap-x-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col">
                {items.map((item, index) => (
                  <div
                    className={`relative mb-6 ${
                      activeIndex === index ? "bg-[#d3e7f8] rounded" : ""
                    }`}
                    key={index}
                  >
                    <div className="absolute h-full bg-gray-200  w-1 rounded-3xl">
                      <div
                        className="bg-[#ff5d05] w-1 rounded-full"
                        style={{
                          height:
                            activeIndex === index
                              ? `${(progress / 100) * 100}%`
                              : "",
                        }}
                      ></div>
                    </div>
                    <button
                      className="flex justify-between items-center w-full px-4 py-4 focus:outline-none"
                      onClick={() => setActiveIndex(index)}
                    >
                      <h1 className="text-xl font-semibold tracking-tight text-[#0e1318]">
                        {item.title}
                      </h1>
                    </button>
                    {activeIndex === index && (
                      <div className="text-gray-600 px-4 pb-4">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <div className="h-[450px] w-full flex-none rounded-2xl shadow-xl lg:aspect-square">
                  <img
                    src={items[activeIndex].image}
                    className="object-contain h-full w-full rounded-2xl"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
         
    );
};

export default ProcessSection;