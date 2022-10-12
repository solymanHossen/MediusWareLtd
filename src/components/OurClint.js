import React from 'react';
import img1 from "../Assets/ZigSig-01.png"
import styles from "../Styles/OurClint.module.css"

const OurClint = () => {
  return (
  <div className="container">
    <div className="text-center">
      <div className='servicesFont mb-4'>Our Clients</div>
      <div className='servicesPFont colorFont mb-5'>We are trusted by industry leaders </div>
    </div>
    <div className="row">
      <div className="col-md-2 mb-4">
        <div className={styles.cardImg}>
        <img src={img1}alt="img"  className='w-100'/>
        </div>
      </div><div className="col-md-2 mb-4">
        <div className={styles.cardImg}>
        <img src={img1}alt="img"  className='w-100'/>
        </div>
      </div><div className="col-md-2 mb-4">
        <div className={styles.cardImg}>
        <img src={img1}alt="img" className='w-100' />
        </div>
      </div><div className="col-md-2 mb-4">
        <div className={styles.cardImg}>
        <img src={img1}alt="img" className='w-100' />
        </div>
      </div><div className="col-md-2 mb-4">
        <div className={styles.cardImg}>
        <img src={img1}alt="img" className='w-100' />
        </div>
      </div><div className="col-md-2 mb-4">
        <div className={styles.cardImg}>
        <img src={img1}alt="img" className='w-100' />
        </div>
      </div><div className="col-md-2 mb-4">
        <div className={styles.cardImg}>
        <img src={img1}alt="img" className='w-100' />
        </div>
      </div>
    </div>
  </div>
  );
};

export default OurClint;