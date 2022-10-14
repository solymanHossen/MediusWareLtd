import React from 'react';
import img1 from "../Assets/education 1.svg"
import styles from "../Styles/Industry.module.css"

const Industry = () => {
  return (
    <div className="container marginTop ">
      <div className="text-center">
        <div className='servicesFont mb-5'>Industry we serve</div>
      </div>
      <div className="row">
        <div className="col-xl-2 col-md-3 mb-4">
          <div className={styles.indusCard}>
            <img src={img1} alt="im1" />
            <div>Education</div>
          </div>
        </div> <div className="col-xl-2 col-md-3 mb-4">
          <div className={styles.indusCard}>
            <img src={img1} alt="im1" />
            <div>Education</div>
          </div>
        </div> <div className="col-xl-2 col-md-3 mb-4">
          <div className={styles.indusCard}>
            <img src={img1} alt="im1" />
            <div>Education</div>
          </div>
        </div> <div className="col-xl-2 col-md-3 mb-4">
          <div className={styles.indusCard}>
            <img src={img1} alt="im1" />
            <div>Education</div>
          </div>
        </div> <div className="col-xl-2 col-md-3 mb-4">
          <div className={styles.indusCard}>
            <img src={img1} alt="im1" />
            <div>Education</div>
          </div>
        </div> <div className="col-xl-2 col-md-3 mb-4">
          <div className={styles.indusCard}>
            <img src={img1} alt="im1" />
            <div>Education</div>
          </div>
        </div> <div className="col-xl-2 col-md-3 mb-4">
          <div className={styles.indusCard}>
            <img src={img1} alt="im1" />
            <div>Education</div>
          </div>
        </div> <div className="col-xl-2 col-md-3 mb-4">
          <div className={styles.indusCard}>
            <img src={img1} alt="im1" />
            <div>Education</div>
          </div>
        </div> <div className="col-xl-2 col-md-3 mb-4">
          <div className={styles.indusCard}>
            <img src={img1} alt="im1" />
            <div>Education</div>
          </div>
        </div> <div className="col-xl-2 col-md-3 mb-4">
          <div className={styles.indusCard}>
            <img src={img1} alt="im1" />
            <div>Education</div>
          </div>
        </div>
        <div className="col-xl-2 col-md-3 mb-4">
          <div className={styles.indusCard}>
            <img src={img1} alt="im1" />
            <div>Education</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;