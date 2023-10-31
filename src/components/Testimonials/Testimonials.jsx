 import Client1 from "./../../assets/images/Client1.svg";
// import Client2 from "./../../assets/Client2.svg";
import Client3 from "./../../assets/images/Client3.svg";
import Client4 from "./../../assets/images/Client4.svg";
// import Client5 from "./../../assets/Client5.svg";
import Client6 from "./../../assets/images/Client6.svg";
import Carousel from "../Carousel/Carousel";

const testimonials = [
    {
        id: 0,
        body: "Great experience! Easy online booking! Great service, clean, safe, gated in a nice community right off the highway!",
        author: {
            name: "Necie C.",
            handle: "Lewisville, TX",
            imageUrl: Client1,
        },
    },
    {
        videoUrlCode: "uYPbbksJxIg",
    },
    {
        id: 1,
        body: "This is the only storage unit facility I use. The staff is friendly and helpful, the facilities are clean, and the rates are reasonable for a place that’s so close by. I’ve used. Overall Experience is good. Really, recommende it, Hopefully , it will fullfil your expectation.",
        author: {
            name: "Adom Shafi",
            handle: "Content Walmart",
            imageUrl: Client3,
        },
    },
    {
        id: 2,
        body: "Staff was incredibly responsive and helpful. Securing a unit of the size we needed was quick and painless and we are so happy to have a safe. The location is convenient and easy to find. I highly recommend it.",
        author: {
            name: "Sarah P.",
            handle: "Winchester, VA",
            imageUrl: Client4,
        },
    },
    {
        videoUrlCode: "HPVfdg86lOc",
    },
    {
        id: 3,
        body: "They offer a choice of outside or climate-controlled storage, and they even store boats and RVs. The location is convenient and easy to find. I highly recommend it.",
        author: {
            name: "Steve Smith",
            handle: "Manager of incomee",
            imageUrl: Client6,
        },
    },
    {
        id: 4,
        body: "They offer a choice of outside or climate-controlled storage, and they even store boats and RVs. The location is convenient and easy to find. I highly recommend it.",
        author: {
            name: "Steve Smith",
            handle: "Manager of incomee",
            imageUrl: Client6,
        },
    },
    {
        id: 5,
        body: "They offer a choice of outside or climate-controlled storage, and they even store boats and RVs. The location is convenient and easy to find. I highly recommend it.",
        author: {
            name: "Steve Smith",
            handle: "Manager of incomee",
            imageUrl: Client6,
        },
    },
    {
        id: 6,
        body: "They offer a choice of outside or climate-controlled storage, and they even store boats and RVs. The location is convenient and easy to find. I highly recommend it.",
        author: {
            name: "Steve Smith",
            handle: "Manager of incomee",
            imageUrl: Client6,
        },
    },
];

const Testimonials = () => {
    return (
        <div className="lg:px-32 py-12 lg:py-16 px-4">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-[28px] lg:text-[35px] leading-[40px] lg:leading-[48px] font-semibold tracking-wide text-black capitalize font-heading">
            What Our Clients Say
          </h1>
        </div>
  
        <div className="mx-auto mt-8 lg:mt-8 flow-root sm:mt-16 lg:mx-0 lg:max-w-none">
          <Carousel>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl shadow-sm bg-gray-50 text-sm leading-6">
                  {testimonial.videoUrlCode ? (
                    <div className="min-h-[280px] md:min-h-[280px]">
                      <iframe
                        src={`https://www.youtube.com/embed/${testimonial?.videoUrlCode}`}
                        title="YouTube Video Player"
                        frameBorder="0"
                        allowFullScreen
                        className="rounded-2xl w-full min-h-[280px] md:min-h-[280px]"
                      />
                    </div>
                  ) : (
                    <div className="p-8 min-h-[280px]">
                      <figcaption className="flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                      <blockquote className="text-gray-900 mt-6 h-44">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                    </div>
                  )}
                </figure>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
};

export default Testimonials;