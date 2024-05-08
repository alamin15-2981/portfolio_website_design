import React from "react";

const Education = () => {
  return (
    <section className="container p-80">
      <div className="row">
        <h3 className="display-3 fw-bold text-center mb-5">Education</h3>
        <p className="text-center">I have completed my education from these different different Institution.</p>
        
        <div className="d-flex justify-content-evenly my-2">
          <div className="col-lg-4 card shadow-sm border-0 p-5">
            <p className="border-bottom">Bachelor of Science (BSc)</p>
            <h3>Daffodil International University, Dhaka</h3>
            <h4>CGPA: 3.70</h4>
          </div>
          <div className="col-lg-4 card shadow-sm border-0 p-5">
            <p className="border-bottom">Higher Secondary Certificate (HSC)</p>
            <h3>Sohiuddin Degree College, Meherpur</h3>
            <h4>GPA: 3.25</h4>
          </div>
        </div>
        <div className="d-flex justify-content-evenly my-2">
          <div className="col-lg-4 card shadow-sm border-0 p-5">
            <p className="border-bottom">Secondary School Certificate (SSC)</p>
            <h3>Meherpur Govt.High School, Meherpur</h3>
            <h4>GPA: 4.61</h4>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
