import   { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from '../../assets/images/arrow-left.png'
import arrowRight from '../../assets/images/arrow-right.png'
import PropTypes from "prop-types";
Carousel.propTypes = {
    children: PropTypes.node,  
  
};
function Carousel({
  children,
   
}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // fade: true,
    autoplaySpeed: 343000,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const sliderRef = useRef();

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>

      <div className="flex justify-center items-center gap-3 mt-10 md:mt-12 z-[-9999]">
        <div
          className="w-20 md:w-24 h-9 md:h-10  p-3 bg-white rounded-full  drop-shadow-xl hover:cursor-pointer flex justify-center items-center gap-2"
          onClick={() => {
            sliderRef.current.slickPrev();
          }}
        >
          <img
            className="w-5"
            src={arrowLeft }
            alt={"Arrow-Left"}
            height={500}
            width={500}
          />
          <div className="text-dark-blue-700 text-xs md:text-sm xl:text-base">
            Prev
          </div>
        </div>
        <div
          className="w-20 md:w-24 h-9 md:h-10  rounded-full p-3 bg-white  drop-shadow-xl hover:cursor-pointer flex justify-center items-center gap-2"
          onClick={() => {
            sliderRef.current.slickNext();
          }}
        >
          <div className="text-dark-blue-700  text-xs md:text-sm xl:text-base">
            Next
          </div>
          <img
            className="w-5"
            src={arrowRight}
            alt={"Arrow-Right"}
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
