import React from 'react'

const Projects = () => {
  return (
    <section className="container p-80">
      <div className="row">
        <h3 className="display-3 fw-bold text-center mb-5">Projects</h3>
        <p className="text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fuga?</p>
        <div className="col-lg-6 projects-leftside-area">
          <h3><span style={{fontSize: "2rem"}}>My Creative Works</span> <br /> <span style={{color: "coral",fontSize: "5rem"}}>Latest Projects</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis error commodi suscipit impedit nam esse? Aliquid obcaecati veritatis harum rerum at natus quibusdam nihil.</p>
          <a href="" className='btn btn-info text-light'>Show More</a>
        </div>

        <div className="col-lg-6 projects-rightside-area d-flex flex-wrap justify-content-evenly gap-4">
          <video src="" controls>
          </video>
          <video src="" controls></video>
          <video src="" controls></video>
        </div>

      </div>
    </section>
  )
}

export default Projects