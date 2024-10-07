"use client";


import{
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaAws,
  FaMicrochip,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import{FaC} from "react-icons/fa6";

import{ DiMysql,
  DiFirebase,
  } from "react-icons/di";
  import { RiNextjsFill } from "react-icons/ri";
  import{SiAltiumdesigner,SiFlutter} from "react-icons/si";
  import { TbBrandReactNative} from "react-icons/tb";

  //about data
  const about = {
    title: "About me",
    description: "Final-year Electronics and Communication Engineering student at NIT Sikkim, experienced in Python, hardware development, embedded systems, and IoT. Seeking to expand expertise and contribute in a professional role.",
  info:[ 
  {
    fieldName: "Name",
    fieldValue: "Kaushik Gupta"
  },
  {
    fieldName: "Phone",
    fieldValue: "(+91) 8617380021"
  },
  {
    fieldName: "Experience",
    fieldValue: "4+ Months"
  },
  {
    fieldName: "Nationality",
    fieldValue: "Indian"
  },
  {
    fieldName: "Languages",
    fieldValue: "English, Hindi"
  },
  {
    fieldName: "Email",
    fieldValue: "gupta.kaushik2002@gmail.com"
  },
]

  };

  //experience data
  const experience ={
    icon: "/public/assets/resume/icons/badge.svg",
    title:"My Experience",
    description: "My experience includes designing apps with React Native, Flutter and working on embedded systems  for smart home automation, delivering efficient solutions. ",
  items:[
    {
      company: "Foxaisr Technologies",
      position: "App Developer",
      duration: "Dec-2023 - Feb-2024"
    },
    {
      company: "Uilatech_LLP",
      position: "Embedded Systems & IOT Developer",
      duration:"June-2024 - Aug-2024"
    }


  ]
  };

//education data
  const education ={
    icon: "/public/assets/resume/icons/cap.svg",
    title:"My Education",
    description: "A dedicated learner with a solid foundation in Electronics and Communication Engineering, specializing in electronics, communication systems, and embedded technologies.",
  items:[
    {
      institution: "National Institute Of Technology Sikkim",
      degree: "B.Tech Electronics & Communication Engg",
      duration: "2021-2025"
    },
    {
      institution: "Kendriya Vidalaya NHPC, Singtam",
      degree: "Higher Senior Secondary (CBSE)",
      duration:"2019-2021"
    },
    {
      institution: "Govt.Sr.Sec School Singtam",
      degree: "Senior Secondary (CBSE)",
      duration:"2018-2019"
    }


  ]
  };

//skills data
const skills ={
  title:"My skills",
  description: "My technical skills encompass various programming languages, frameworks, and tools, including C, Python, and React Native, with a strong focus on software development and hardware development. I am committed to leveraging these skills to contribute effectively to innovative engineering solutions.",
  skillList: [
    {
      icon: <FaC />,
      name: "C" ,
    },
    {
      icon: <FaPython />,
      name: "Python" ,
    },
    {
      icon: <FaReact />,
      name: "React.js" ,
    },
    
    {
      icon: <SiFlutter />,
      name: "Flutter" ,
    },
    {
      icon: <TbBrandReactNative />,
      name: "React-Native" ,
    },
    {
      icon: <DiFirebase />,
      name: "Firebase" ,
    },
    {
      icon: <DiMysql/>,
      name: "My-SQL" ,
    },
    {
      icon: <FaHtml5 />,
      name: "html" ,
    },
    {
      icon: <FaCss3 />,
      name: "CSS" ,
    },
    {
      icon: <FaJs />,
      name: "Java-Script" ,
    },
    {
      icon: <RiNextjsFill />,
      name: "Next.js" ,
    },
    {
      icon: <FaAws />,
      name: "AWS" ,
    },
    {
      icon: <FaMicrochip />,
      name: "Hardware & IOT" ,
    },
    {
      icon: <SiAltiumdesigner />,
      name: "PCB Designing" ,
    },
    {
      icon: <FaGitAlt/>,
      name: "Git" ,
    },
    {
      icon: <FaGithub />,
      name: "Github" ,
    },
  ]
};

import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition: {delay:2.4, duration:0.4, ease: "easeIn"},
    }}

    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" 
      className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
        gap-6 value=">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        {/*content */}
        <div className="min-h-[70vh] w-full">
        {/*experience*/}
        <TabsContent value="experience" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{experience.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {experience.description}
            </p>
            <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item,index)=>{
                  return (
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                    flex flex-col justify-center items-center lg:items-start
                    gap-1"
                    >
                    <span className="text-[#8289f7]">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px]
                    text-center lg:text-left">
                    {item.position}
                    </h3>
                    <div className="flex items-center gap-3">
                    {/* dot */}
                      <span className="w-[6px] h-[6px] rounded-full bg-[#8289f7] "></span>
                      <p className="text-white/60">{item.company}</p>
                    </div>
                    </li>
                  )
                })}
              </ul>
            </ScrollArea>
          </div>
        </TabsContent>

        {/*education*/}
        <TabsContent value="education" className="w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{education.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {education.description}
            </p>
            <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {education.items.map((item,index)=>{
                  return (
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                    flex flex-col justify-center items-center lg:items-start
                    gap-1"
                    >
                    <span className="text-[#8289f7]">{item.duration}</span>
                    <h2 className="text-xl max-w-[260px] min-h-[80px]
                    text-center lg:text-left">
                    {item.degree}
                    </h2>
                    <div className="flex items-center gap-3">
                    {/* dot */}
                      <span className="w-[8px] h-[8px] rounded-full bg-[#8289f7] "></span>
                      <p className=" text-white/60">{item.institution}</p>
                    </div>
                    </li>
                  )
                })}
              </ul>
            </ScrollArea>
          </div>
        </TabsContent>

        {/*skills*/}
        <TabsContent value="skills" className="w-full h-full">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {skills.description}
              </p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
              {skills.skillList.map((skill,index)=>{
                return (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl
                        flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-[#8289f7]
                          transition-all duration-300">
                          {skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                
              )
              })}
            </ul>
          </div>
        </TabsContent>

        {/*about*/}
        <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return (
                      <li key={index} className="flex items-center justify-center gap-4 xl:justify-start">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl text-[#8289f7]">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
        </TabsContent>
        </div>
      </Tabs>
    </div>
    </motion.div>
  )
}

export default Resume