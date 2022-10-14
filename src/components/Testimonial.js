import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import styles from "../Styles/TestiMonial.module.css"
import img1 from "../Assets/Group 271.png"
const Testimonial = () => {
  return (
    <div className="container marginTopTest">
      <div className="text-center marginTop76">
        <div className='servicesFont'>Testimonials</div>
        <div className='servicesPFont colorFont mt-4 mb-5'>What Our Clients are Saying?</div>
      </div>
      <div className="row">
        <div className="d-flex align-items-center gap-4 flexDirection">
        <div className="col-md-4 ">
          <div className='marginBottom' >
          <div className='d-flex align-items-center gap-1' >
            <button className={styles.btnPa}><AiOutlineLeft /></button>
            <div className={styles.cardTestimonial}>
              <img src={img1} alt="img1" className='text-red' />
              <div className='smallFont mt-4 mb-4 '>Lorem ipsum dolor sit amet, consectetur adipisci elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
              <div className='servicesPFont mb-1 '>John Smith</div>
              <div>CEO, <span className='smallFont fontHover'> Lorem Ipsum </span></div>
            </div>
          </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className='marginBottom' >
          <div className={styles.cardTestimonialBig}>
            <img src={img1} alt="img1" className='text-red' />
            <div className='smallFont mt-4 mb-4 fontHover'>Lorem ipsum dolor sit amet, consectetur adipisci elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
            <div className='servicesPFont mb-1 nameFontHover'>John Smith</div>
            <div>CEO, <span className='smallFont fontHover'> Lorem Ipsum </span></div>
          </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className='marginBottom' >
          <div className='d-flex align-items-center gap-1' >
            <div className={styles.cardTestimonial}>
              <img src={img1} alt="img1" className='text-red' />
              <div className='smallFont mt-4 mb-4 '>Lorem ipsum dolor sit amet, consectetur adipisci elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
              <div className='servicesPFont mb-1'>John Smith</div>
              <div>CEO, <span className='smallFont  fontHover'> Lorem Ipsum </span></div>
            </div>
            <button className={styles.btnPa}><AiOutlineRight/></button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;