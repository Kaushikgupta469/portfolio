"use client";

import { motion } from "framer-motion";
import React,{useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {  BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects =  [
  {
    num: "01",
    category: "Fitness Freak App",
    title: "project 1",
    description: "Fitness Freak is a React Native app featuring animated exercises, tracking workout progress, calories burned, and time spent on fitness routines.",
    stack: [{name: "React-Native "} , {name:"React-Animations"}],
    image: "/assets/work/fitness.png",
    github:"https://github.com/Kaushikgupta469/Fitness-Freak.git"
  },
  {
    num: "02",
    category: "Focus Time App",
    title: "project 2",
    description: "Focus Time is a React Native app with animated timers, allowing users to add tasks, track focus sessions, and view task completion history.",
    stack: [{name: "React-Native "} , {name:"React-Animations "} , {name:"Firebase"}],
  image: "/assets/work/focus.png",
    github:"https://github.com/Kaushikgupta469/Focustime.git"
  },
  {
    num: "03",
    category: "Anime Vault",
    title: "project 3",
    description: "Anime Vault is a Next.js frontend website that fetches anime data via an API, displaying a list of anime with details such as episodes, release year, and ratings.",
    stack: [{name: "Next.js "} , {name:"Anime-API"}],
  image: "/assets/work/vault.png",
    github:"https://github.com/Kaushikgupta469/Anime-vault.git"
  },
  {
    num: "04",
    category: "Smart Car Robot",
    title: "project 4",
    description: "Smart Car Robot, built with Arduino and various sensors, features voice, app, and remote control, along with line-following and obstacle-avoidance capabilities.",
  stack: [{name: "Arduino Uno "} , {name:"Various Sensors-(Ultrasonic,IR,Bt Module) "} ,{name:"Custom App"}],
image: "/assets/work/car.jpg",
    github:"https://github.com/Kaushikgupta469/Arduino_car_robot.git"  
},
  {
    num: "05",
    category: "Smart Switch",
    title: "project 5",
    description: "Smart Switch, built with NodeMCU and servo motors, features a 3D-printed chassis and is app-controlled for seamless home automation.",
  stack: [{name: "Node MCU  "} , {name:"3D custom print"} , {name:"custom App"}],
image: "/assets/work/switch.png",
    github:"https://github.com/Tejaskhillare2510/Home-Automation-System.git"  
}
]; 

const Work = () => {
  const [project,setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) =>{
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4 , duration:0.4, ease:"easeIn"}}} className="min-h-
    [80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline num*/}
              <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white
              group-hover:text-[#8289f7] transition-all duration-500 capitalize">
                {project.category} 
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return (
                    <li key={index} className="text-xl text-[#8289f7]">
                      {item.name}
                      {/* remvoe the last  comma */}
                      {index !== project.stack.length -1 && ""}
                    </li>
                  )
                })}
              </ul>
              {/* border*/}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100} >
                    <Tooltip >
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex  justify-center items-center group ">
                    <BsGithub className="text-white text-3xl
                    group-hover:text-[#8289f7]" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github repository</p>
                  </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project,index)=>{
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center
                    items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                      {/*image */}
                      <div className="relative w-full h-full">
                        <Image 
                        src={project.image}
                         fill 
                         className="object-cover" 
                        alt=""  
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-
              [calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max
              xl:justify-none"
               btnStyles="bg-[#8289f7] hover:bg-[#8289f7]-hover 
               text-primary text-[22px] w-[44px] h-[44px] flex justify-center
               items-center" />
            </Swiper>
          </div> 
        </div>
      </div>
    </motion.section>
  );
};
export default Work;