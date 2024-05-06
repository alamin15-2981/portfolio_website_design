import React from "react";
import { BiSolidFileHtml,BiSolidFileCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiFirebaseFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="container p-80">
      <div className="row">
        <h3 className="display-3 fw-bold text-center mb-5">Skills</h3>
        <p className="text-center">I have experience with these technologies</p>
        <div className="d-flex flex-wrap justify-content-evenly align-items-evenly text-center">
          <div className="col-lg-2">
            <BiSolidFileHtml className="skills-icon" />
            <p className="text-center fw-bold">Html</p>
          </div>
          <div className="col-lg-2">
            <BiSolidFileCss className="skills-icon" />
            <p className="text-center fw-bold">Css</p>
          </div>
          <div className="col-lg-2">
            <FaBootstrap className="skills-icon" />
            <p className="text-center fw-bold">Bootstrap</p>
          </div>
          <div className="col-lg-2">
            <IoLogoJavascript className="skills-icon" />
            <p className="text-center fw-bold">Javascript</p>
          </div>
          <div className="col-lg-2">
            <GrReactjs className="skills-icon" />
            <p className="text-center fw-bold">React Js</p>
          </div>
          <div className="col-lg-2">
            <SiRedux className="skills-icon" />
            <p className="text-center fw-bold">Redux</p>
          </div>
          <div className="col-lg-2">
            <TbBrandReactNative className="skills-icon" />
            <p className="text-center fw-bold">React Native</p>
          </div>
          <div className="col-lg-2">
            <RiFirebaseFill className="skills-icon" />
            <p className="text-center fw-bold">Firebase</p>
          </div>
          <div className="col-lg-2">
            <SiPhp className="skills-icon" />
            <p className="text-center fw-bold">Php</p>
          </div>
          <div className="col-lg-2">
            <SiMysql className="skills-icon" />
            <p className="text-center fw-bold">Mysql</p>
          </div>
          <div className="col-lg-2">
            <FaLaravel className="skills-icon" />
            <p className="text-center fw-bold">Laravel</p>
          </div>
          <div className="col-lg-2">
            <FaGithub className="skills-icon" />
            <p className="text-center fw-bold">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
