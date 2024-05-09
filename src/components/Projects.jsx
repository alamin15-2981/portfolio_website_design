import React from 'react'
import DefenseVideo from './../assets/videos/Project_Video.mp4'
import RmsVideo from './../assets/videos/rms.mp4'

const Projects = () => {
  return (
    <section className="container p-80">
      <div className="row">
        <h3 className="display-3 fw-bold text-center mb-5"> <span style={{fontSize: "2rem"}}>My Creative</span> <br /> <span style={{color: "coral"}}>Latest Project</span></h3>
        

        <div className="col-lg-6 my-5">
          <video src={DefenseVideo} controls style={{maxHeight: "300px"}} className='w-100 rounded-3 ratio ratio-16x9'></video>
          <p>I used Html,css,bootstrap,javascript,php,mysql,laravel these technology in this website. There are two types user (employee and company) here in my website. Both are create profile in this website. Employee can easily find his/her dream job and get many offers easily and they can filter job and drop his/her valuable cv. And they will watch watch job releated information with video. Company can post job and get employee very easily with employee cv. If company want they are provide different offers and share some information with video they can in this website!</p>
        </div>
        <div className="col-lg-6 my-5">
          <video src={RmsVideo} controls style={{maxHeight: "300px"}} className='w-100 rounded-3 ratio ratio-16x9'></video>
          <p>I used Html,css,bootstrap,javascript,php,mysql these technology in this website.User can create a profile and book a table for family or relatives.They can contact with restaurant owner and give his/her feedback. They can provide review and see which all items are available in this restaurant.Restaurant admin have all access of this project . He/she can post menu, watch user feedback, review, message, booking table and he can remove user if user will create some problem.</p>
        </div>

        <div className='text-center'>
          <a href="https://github.com/alamin15-2981" target='_blank' className='btn btn-primary text-light w-25'>Show More</a>
        </div>
      </div>
    </section>
  )
}

export default Projects