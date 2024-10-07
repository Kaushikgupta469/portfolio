"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 8617380021",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "gupta.kaushik2002@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Singtam Bazar, East Sikkim",
  },
];

const Contact = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form  */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-[#8289f7]">Let's work together</h3>
              <p className="text-white/60">
                Partner with me to bring your ideas to life with precision and
                creativity. Connect today to discuss how we can collaborate to
                achieve your goals seamlessly.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  onChange={handleChange}
                  required
                />
              </div>
              {/* select */}
              <Select name="service" onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="App Development">App Development</SelectItem>
                    <SelectItem value="Software Development">Software Development</SelectItem>
                    <SelectItem value="Hardware Development">Hardware Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                onChange={handleChange}
                required
              />
              {/* btn */}
              <Button size="md" type="submit" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div
                    className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c]
                  text-[#8289f7] rounded-md flex items-center justify-center"
                  >
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
