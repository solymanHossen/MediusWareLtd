import React from 'react';
import img1 from "../Assets/Group 140.png"

const Technology = () => {
  return (
    <div className="bgTechnology">
    <div className="container">
      
      <div className="text-center">
        <div className='servicesFont mb-4'>Technology Thorn We Use </div>
      </div>
      <div className="row">
        <div className="col-md-3 ">
          <div className='d-flex align-items-center justify-content-center'>
          <img src={img1} alt="img" className='w-100'/>
          </div>
        </div> <div className="col-md-3 ">
          <div className='d-flex align-items-center justify-content-center'>
          <img src={img1} alt="img" className='w-100'/>
          </div>
        </div> <div className="col-md-3 ">
          <div className='d-flex align-items-center justify-content-center'>
          <img src={img1} alt="img" className='w-100'/>
          </div>
        </div> <div className="col-md-3 ">
          <div className='d-flex align-items-center justify-content-center'>
          <img src={img1} alt="img" className='w-100'/>
          </div>
        
        </div>
      </div>
    </div>
    </div>
  );
};

export default Technology;