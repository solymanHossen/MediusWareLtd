import React from 'react';
import styles from "../Styles/Process.module.css"
import img1 from "../Assets/Rectangle 481.png"
import img2 from "../Assets/Rectangle 482.png"
import img3 from "../Assets/Group (6).png"


const Process = () => {
  return (
    <div className="bgProcess pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={styles.postionRelative}>
              <div className="row">
                <div className="col-md-8">
                  <img src={img1} alt="img1" className='w-100'/>
                </div>
                <div className="col-md-4">
                  <div>
                    <div className={styles.cardProcess}>
                      <div className='servicesFont'>7+</div>
                      <div className='servicesPFont'>Year of Experience</div>
                    </div>
                    <div>
                    <img src={img2} alt="img2" className={styles.imgPostion} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="col-md-6">
            <div className='servicesFont mb-4'>Process</div>
            <div className='servicesPFont colorFont'>How we reach your business goals. Check out our workflow.</div>
            <div className={styles.smallCard}>
              <div className='d-flex align-items-center justify-content-center heightWidth'>
              <img src={img3} alt="img3" className={styles.singleImg} />
              </div>
              <div className='ms-4'>
                <div className='mb-2 servicesPFont'>Ideate</div>
                <div>Turning your ideas into concepts</div>
              </div>
            </div> <div className={styles.smallCard}>
              <div className='d-flex align-items-center justify-content-center heightWidth'>
              <img src={img3} alt="img3" className={styles.singleImg} />
              </div>
              <div className='ms-4'>
                <div className='mb-2 servicesPFont'>Ideate</div>
                <div>Turning your ideas into concepts</div>
              </div>
            </div> <div className={styles.smallCard}>
              <div className='d-flex align-items-center justify-content-center heightWidth'>
              <img src={img3} alt="img3" className={styles.singleImg} />
              </div>
              <div className='ms-4'>
                <div className='mb-2 servicesPFont'>Ideate</div>
                <div>Turning your ideas into concepts</div>
              </div>
            </div> <div className={styles.smallCard}>
              <div className='d-flex align-items-center justify-content-center heightWidth'>
              <img src={img3} alt="img3" className={styles.singleImg} />
              </div>
              <div className='ms-4'>
                <div className='mb-2 servicesPFont'>Ideate</div>
                <div>Turning your ideas into concepts</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Process;