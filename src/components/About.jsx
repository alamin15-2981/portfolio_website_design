import React from 'react'
import myPicture from './../../src/images/shovon.png'
import { IoMdMusicalNote } from "react-icons/io";
import { MdCardTravel } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";

const About = () => {
  return (
    <section className='container p-80'>
      <div className="row">
        <div className="col-lg-6 about-leftside-area">
          <div className="about-images-area text-center">
            <img src={myPicture} alt="picture" className='img-fluid object-fit-cover' />
          </div>
        </div>
        <div className="col-lg-6 about-rightside-area">
          <span style={{color: "#ff9142"}}>My Intro</span>
          <h2 className='display-1 fw-bold'>About Me</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eaque sunt eius repellat, voluptate odit? Ad dolorum natus debitis provident numquam veritatis. Provident sunt itaque architecto ipsa possimus, similique tempora!</p>
          <address className='d-flex justify-content-around'>
            <ul type="none">
              <li>Name : Md Shovon</li>
              <li>Phone : 01316833956</li>
              <li>gmail : mdshovon476@gmail.com</li>
            </ul>
            <ul type="none">
              <li>Gender : Male</li>
              <li>Address : Chandpur</li>
              <li>Status : Single</li>
            </ul>
          </address>
          <p className='h1 fw-bold'>My Interests</p>
          <div className='d-flex justify-content-between'>
            <p><IoMdMusicalNote className='about-icon' /> Music</p>
            <p><MdCardTravel className='about-icon' /> Travel</p>
            <p><MdMovie className='about-icon' /> Movie</p>
            <p><MdInsertPhoto className='about-icon' /> Photo</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About