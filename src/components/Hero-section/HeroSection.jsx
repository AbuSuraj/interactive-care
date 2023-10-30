import { useEffect, useState } from "react";
// import image from "../../assets/images/Hero01.svg"
import { Player } from '@lottiefiles/react-lottie-player';
import './HeroSection.css'
const HeroSection = () => {
  const [changingTitle, setChangingTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const description = "We are the type of partners you can count on! We have successfully helped b2b businesses, b2c businesses, and start-ups stream more revenues by connecting to the right audiences at the right time!";
  const title = 'We can help you to achieve the success you dream'
  useEffect(() => {
    const texts =
      [
        "Customer Acquisition",
        "Nurturing Leads & Prospects",
        "Effective Marketing Campaigns",
        "Optimizing Sales Pipelines",
        "Connecting With Potential Partners",
      ]

    const currentText = texts[currentIndex % texts.length];
    let currentLetterIndex = 0;

    const interval = setInterval(() => {
      if (currentLetterIndex < currentText.length) {
        setChangingTitle(currentText.slice(0, currentLetterIndex + 1));
        currentLetterIndex++;
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setChangingTitle("");
        currentLetterIndex = 0;
      }
    }, 150);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
  
    <section>
      <div className="hero-container">
        <div className="mt-10 text-container">
          <div className="w-4/5">
            <h1 className="mt-10 lg:mt-4 text-[28px] lg:text-[35px]     font-semibold   text-black capitalize font-heading">
              {title}
            </h1>

            <h1 className="text-base lg:text-xl font-semibold text-[#ff5d05] capitalize">
              through  {changingTitle}
            </h1>


            <p className="mt-10 text-lg leading-8 text-gray-600">
              {description}
            </p>
          </div>
          <div className="flex my-5">
            <div className="mt-10 flex items-center gap-x-6 cursor-pointer">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-[#ff5d05] py-2 px-6 text-base font-medium leading-7 text-white shadow-sm hover:bg-blue"
              >
                Get Started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

          </div>
        </div>
        <div className="image-container">
          <Player
            src="https://lottie.host/b1331e69-3890-426c-9c88-ec066bc899fb/M6TFyEX7MZ.json"
            className="player w-[400px] h-[400px]"
            loop
            autoplay
          />
          {/* speed={10} */}
          {/* <img className="w-[500px]" src="https://prospectshive.com/_next/static/media/Hero11.675cb43f.svg" alt="Success-logo" /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;