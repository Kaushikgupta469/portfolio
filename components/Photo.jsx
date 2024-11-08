"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex items-center justify-center"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[300px] h-[300px] absolute z-10"
        >
          <Image
            src="/assets/photo.jpg"
            priority
            quality={100}
            fill
            alt=""
            className="object-cover rounded-full"
          />
        </motion.div>

        {/* Animated Circle */}
        <motion.svg
          className="absolute w-[300px] h-[300px] z-20"
          fill="transparent"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="150"
            cy="150"
            r="148"
            stroke="#8289f7"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
