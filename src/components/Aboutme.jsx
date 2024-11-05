import React from "react";
import BoxReveal from "@/components/ui/box-reveal";
import { Dock, DockIcon } from "@/components/ui/dock";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

const AboutMe = () => {
  const Icons = {
    gitHub: <FaGithub />,
    googleDrive: <AiFillGoogleCircle />,
    linkedin: <CiLinkedin />,
    whatsapp: <FaWhatsapp />,
  };

  return (
    <div className="w-full h-[70vh] sm:flex-col sm:h-[150dvh] sm:p-4 flex items-center justify-center">
      <div className="w-full sm:order-2 h-full flex justify-center items-start p-10 flex-col gap-10">
        <BoxReveal boxColor="#009688">
          <h1 className="text-4xl font-bold">About me</h1>
        </BoxReveal>
        <BoxReveal boxColor="#009688">
          <p>
            Hello! I'm Abdessamad Bouih, a passionate front-end developer with a
            keen eye for design and a drive to create seamless user experiences.
            My expertise lies in transforming ideas into responsive,
            interactive, and visually appealing websites that engage and delight
            users. With a strong foundation in HTML, CSS, JavaScript, and
            popular frameworks like React, I focus on writing clean, efficient
            code and staying up-to-date with the latest web development trends.
            Whether it's crafting a custom UI component, optimizing performance,
            or ensuring accessibility, I’m committed to delivering high-quality
            work that exceeds expectations. I’m always eager to collaborate on
            projects that challenge me and help expand my skill set. Let's
            connect and bring your vision to life!
          </p>
        </BoxReveal>
        <Dock magnification={60} distance={100} className="bg-black/10 dark:bg-white/10">
          <DockIcon className="bg-black/10 dark:bg-white/10">
            <a href="https://github.com/abdessamad10bouih" target="_blank" className="w-full h-full flex items-center justify-center rounded-full hover:bg-teal-500 hover:text-white">
              {Icons.gitHub}
            </a>
          </DockIcon>
          <DockIcon className="bg-black/10 dark:bg-white/10">
            <a href="https://wa.me/0679103679" target="_blank" className="w-full h-full flex items-center justify-center rounded-full hover:bg-teal-500 hover:text-white">
              {Icons.whatsapp}
            </a>
          </DockIcon>
          <DockIcon className="bg-black/10 dark:bg-white/10">
          <a href="https://www.linkedin.com/in/abdessamad-bouih-235b522a9/" target="_blank" className="w-full h-full flex items-center justify-center rounded-full hover:bg-teal-500 hover:text-white">
            {Icons.linkedin} 
            </a>
          </DockIcon>
          <DockIcon className="bg-black/10 dark:bg-white/10">
          <div className="w-full h-full flex items-center justify-center rounded-full hover:bg-teal-500 hover:text-white">
            {Icons.googleDrive} 
            </div>
          </DockIcon>
        </Dock>
      </div>
      <div className="w-full sm:order-1 h-full flex items-center justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/151373460?v=4"
          className="rounded-xl"
          alt="Abdessamad Bouih"
        />
      </div>
    </div>
  );
};

export default AboutMe;
