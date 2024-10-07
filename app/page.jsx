import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="mb-6 h1">
              Hello I'm <br /> <span className="text-orange-400">Kaushik Gupta</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Final-year B.Tech student at NIT Sikkim, skilled in software, app development, and various technology.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              {/* Wrap the Button in an <a> tag for download */}
              <a href="/assets/document/cv.pdf" download>
                <Button variant="outline" size="lg" className="flex items-center gap-2 uppercase">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[#8289f7] rounded-full flex justify-center items-center text-[#8289f7] text-base hover:bg-[#8289f7] hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
