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
          <p>Hello, my name is Al Amin. I'm a full stack web application developer and native software application developer. Recently, I have completed my graduation from Daffodil International University on department of B.S.C in computer science and engineering.</p>
          <address className='d-flex justify-content-evenly'>
            <ul type="none" className='w-50'>
              <li>Name : Md Shovon</li>
              <li>Phone : 01316833956</li>
              <li>gmail : alamin15-2981@diu.edu.bd</li>
            </ul>
            <ul type="none" className='w-50'>
              <li>Gender : Male</li>
              <li>Address : Block C Flat 122 Rd Number 4, Basundhara Residential Area, Bangladesh</li>
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