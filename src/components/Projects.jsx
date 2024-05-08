import React from 'react'

const Projects = () => {
  return (
    <section className="container p-80">
      <div className="row">
        <h3 className="display-3 fw-bold text-center mb-5"> <span style={{fontSize: "2rem"}}>My Creative</span> <br /> <span style={{color: "coral"}}>Latest Project</span></h3>
        

        <div className="col-lg-6 my-5">
          <video src="" controls className='w-100 rounded-3 ratio ratio-16x9'></video>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem iste vero earum, amet expedita deleniti dolor explicabo, iure repellendus dolore voluptatibus veritatis nisi ipsa repudiandae iusto ut quas officia? Aliquid inventore nobis repudiandae officia omnis voluptas neque, corrupti eum sit.</p>
        </div>
        <div className="col-lg-6 my-5">
          <video src="" controls className='w-100 rounded-3 ratio ratio-16x9'></video>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem iste vero earum, amet expedita deleniti dolor explicabo, iure repellendus dolore voluptatibus veritatis nisi ipsa repudiandae iusto ut quas officia? Aliquid inventore nobis repudiandae officia omnis voluptas neque, corrupti eum sit.</p>
        </div>

        <div className='text-center'>
          <a href="https://github.com/alamin15-2981" target='_blank' className='btn btn-primary text-light w-25'>Show More</a>
        </div>
      </div>
    </section>
  )
}

export default Projects