import React from 'react';
import styles from "../Styles/ChooseUs.module.css"
import img from "../Assets/Icon.png"
import img1 from "../Assets/Rectangle 141.png"
import img2 from "../Assets/Rectangle 143.png"
import img3 from "../Assets/Group 294.png"
import img4 from "../Assets/Rectangle 142.png"


const ChooseUs = () => {
  return (
    <div className='marginTop'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className='marginRightLeft'>
            <div className='servicesFont mb-4'>Why Choose Us</div>
            <div className='servicesPFont colorFont mb-5'>Incepted in 2015, Mediusware Ltd. has been serving as a leading IT Solution  <br /> provider in Bangladesh.</div>

            {/* card section */}
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className={styles.choseUsCard}>
                  <img src={img} alt="img" className='pt-1' />
                  <div className={styles.quality}>Quality</div>
                  <div className={styles.qualitySmall}>We ensure the best quality.</div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className={styles.choseUsCard}>
                  <img src={img} alt="img" className='pt-1' />
                  <div className={styles.quality}>Quality</div>
                  <div className={styles.qualitySmall}>We ensure the best quality.</div>
                </div>
              </div>  <div className="col-md-6 mb-4">
                <div className={styles.choseUsCard}>
                  <img src={img} alt="img" className='pt-1' />
                  <div className={styles.quality}>Quality</div>
                  <div className={styles.qualitySmall}>We ensure the best quality.</div>
                </div>
              </div>  <div className="col-md-6 mb-4">
                <div className={styles.choseUsCard}>
                  <img src={img} alt="img" className='pt-1' />
                  <div className={styles.quality}>Quality</div>
                  <div className={styles.qualitySmall}>We ensure the best quality.</div>
                </div>
              </div>
            </div>
            </div>

          </div>

          {/* img section */}

          <div className="col-md-6">

           <div className='marginRightLeft'>
            <div className="d-flex">

              <div className='d-flex flex-column gap-4'>
                <img src={img1} alt="img1" className='w-100 ' />
                <img src={img3} alt="img3" className='w-100 maxWidth ' />
              </div>
             
                <div className='d-flex flex-column position-relative'>
                 
                  <img src={img2} alt="img2" className='w-100  ps-4 paddingZero ' />
                
                   
                  <img src={img4} alt="img2" className='w-100 imgHeight4 ' />
                 
                </div>
              

            </div>
          </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default ChooseUs;