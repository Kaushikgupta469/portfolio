import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const socials = [
 {icon: <FaGithub />, path: 'https://github.com/Kaushikgupta469'},
  {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/kaushik-gupta-991937251/'},
  {icon: <FaTwitter />, path: 'https://twitter.com/Kaushik58050989'},
  
];


const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
        <Link key ={index} href={item.path} className={iconStyles}>
        {item.icon}
        </Link>
        );
      })}
    </div>
  );
};

export default Social;