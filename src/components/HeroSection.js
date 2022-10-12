import React from 'react';
import styles from "../Styles/Hero.module.css"
import img1 from "../Assets/image 1.png"

const HeroSection = () => {
  return (
    <div className={styles.heroMainSection}>
      <div className={styles.imgSection}>
        <img src={img1} alt="hero img" className={styles.singleImg} />
      </div>

      <div className={styles.contentMain}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={styles.contentSection}>
                <div>We shape the art of <br />
                  technology</div>
                <button className={styles.btnHero}>Know More</button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default HeroSection;