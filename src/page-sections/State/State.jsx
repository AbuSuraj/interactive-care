import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const stats = [
    { id: 1, name: "Cold Calls per day", value: "60+", color: "#a5a3e7" },
    { id: 2, name: "Email per day", value: "300+", color: "#86d2a3" },
    { id: 3, name: "LinkedIn Tasks per day ", value: "50+", color: "#ffb493" },
    { id: 4, name: "Email per day", value: "300+", color: "#92c0ff" },
];

export default function StatSection() {

    useEffect(() => {
        AOS.init();  
      }, []);

    return (
        <div className="relative lg:pt-24 py-16">
            <div className="bg-[#fafafa] lg:px-32 pb-16 pt-16 px-6">
                <div data-aos="fade-up" className="text-center">
                    <h1 className="text-[28px] lg:text-[35px] leading-[40px] lg:leading-[48px] font-semibold trackin-wide text-black capitalize font-heading">
                        Trusted by creators worldwide
                    </h1>
                </div>
                <dl data-aos="fade-down" className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col bg-gray-400/5 p-8 lg:p-12"
                        >
                            <dt className="text-sm mt-3 font-semibold leading-6 text-gray-600">
                                {stat.name}
                            </dt>
                            <dd
                                className="order-first text-4xl font-semibold tracking-tight animate-bounce"
                                style={{ color: stat.color }}
                            >
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
