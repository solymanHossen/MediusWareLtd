import React from 'react';
import img1 from "../Assets/Group.png"
import styles from "../Styles/Exprince.module.css"
const Exprince = () => {
  return (
   <div className="container marginTop">
    <div className="row">
      <div className="col-md-3">
        <div className={styles.cardStyle}>
        <img src={img1} alt="img" className={styles.exImg}/>
        <div className={styles.exContent}>07+</div>
        <div className={styles.exContentSmall}>Years of Experience</div>
        </div>
      </div> <div className="col-md-3">
        <div className={styles.cardStyle}>
        <img src={img1} alt="img" className={styles.exImg}/>
        <div className={styles.exContent}>07+</div>
        <div className={styles.exContentSmall}>Years of Experience</div>
        </div>
      </div> <div className="col-md-3">
        <div className={styles.cardStyle}>
        <img src={img1} alt="img" className={styles.exImg}/>
        <div className={styles.exContent}>07+</div>
        <div className={styles.exContentSmall}>Years of Experience</div>
        </div>
      </div> <div className="col-md-3">
        <div className={styles.cardStyle}>
        <img src={img1} alt="img" className={styles.exImg}/>
        <div className={styles.exContent}>07+</div>
        <div className={styles.exContentSmall}>Years of Experience</div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Exprince;