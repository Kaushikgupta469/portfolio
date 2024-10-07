"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "App Development",
    description:"Specializing in app development with expertise in React Native and Flutter. Skilled in backend integration, including authentication and real-time processing, using Firebase for scalable solutions.",
    href:"https://github.com/Kaushikgupta469/Fitness-Freak.git"
  },
  {
    num: "02",
    title: "Software Development",
    description:"Offering tailored software development services, leveraging expertise in multiple programming languages and frameworks to create efficient and reliable solutions. ",
    href:"https://github.com/Kaushikgupta469/Machine_Failure_Detection.git"
  },
  {
    num: "03",
    title: "Front-End Development",
    description:"Expert in frontend development, utilizing React.js, Next.js, Framer Motion, and TailwindCSS to create visually appealing, animated, and user-friendly websites.",
    href:"https://github.com/Kaushikgupta469/Anime-vault.git"
  },
  {
    num: "04",
    title: "Hardware Development",
    description:"Providing hardware development with ESP32, NodeMCU, Arduino, and sensors for IoT projects, including smart home automation and lighting.",
    href:"https://github.com/Kaushikgupta469/Arduino_car_robot.git"
  },
];

import {  motion } from "framer-motion";


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{delay:2.4, duration:0.4, ease:"easeIn"},
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
      {services.map((service,index)=>{
        return(
          <div key={index} className="flex flex-col justify-center flex-1 gap-6 group"
          >
          {/* top */}
            <div className="flex items-center justify-between w-full">
              <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
              {service.num}</div>
              <Link href={service.href} 
              className="w-[60px] h-[60px] rounded-full bg-white/80
              group-hover:bg-[#8289f7] transition-all duration-500 flex
              justify-center items-center hover:-rotate-45">
              <BsArrowDownRight className="text-3xl text-primary" />
              </Link>
            </div>
            {/* title */}
            <h2 className="text-[40px] font-bold leading-none text-white/80 
            group-hover:text-[#8289f7] transition-all duration-500"
            >
            {service.title}</h2>
            {/* description */}
            <p className="text-white/60">{service.description}</p>
            {/* border */}
            <div className="w-full border-b border-white/20"></div>
          </div>
        );
      })}
      </motion.div>
    </div>
    </section>
  )
}

export default Services