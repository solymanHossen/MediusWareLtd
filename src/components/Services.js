import React from 'react';
import styles from "../Styles/Services.module.css"
import img1 from "../Assets/web 2.png"
import { AiOutlineArrowRight } from 'react-icons/ai';
import img2 from "../Assets/Rectangle 139.png"
import img3 from "../Assets/Rectangle 138.png"
import img4 from "../Assets/Rectangle 131.png"
import img5 from "../Assets/Rectangle 132.png"
const Services = () => {
  return (
    <div className={styles.servicesMainSection}>



      <div className="container">
        <div className="text-center pt-5">
          <div className='servicesFont mb-4'>Services</div>
          <div className='servicesPFont'>We Are Offering All Kinds of IT Solutions Services</div>
        </div>
        {/* card */}
        <div className={styles.marginTop}>
          <div className="row">
            <div className="col-md-3 col-sm-6 marginBottom2">
              <div className={styles.mainCard}>
                <img src={img1} alt="img" className={styles.cardImg} />
                <div className='cardHeaderFont'>Web Development</div>
                <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
                <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 marginBottom2">
              <div className={styles.mainCard}>
                <img src={img1} alt="img" className={styles.cardImg} />
                <div className='cardHeaderFont'>Web Development</div>
                <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
                <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 marginBottom2">
              <div className={styles.mainCard}>
                <img src={img1} alt="img" className={styles.cardImg} />
                <div className='cardHeaderFont'>Web Development</div>
                <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
                <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 marginBottom2">
              <div className={styles.mainCard}>
                <img src={img1} alt="img" className={styles.cardImg} />
                <div className='cardHeaderFont'>Web Development</div>
                <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
                <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 marginBottom2">
              <div className={styles.mainCard}>
                <img src={img1} alt="img" className={styles.cardImg} />
                <div className='cardHeaderFont'>Web Development</div>
                <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
                <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 marginBottom2">
              <div className={styles.mainCard}>
                <img src={img1} alt="img" className={styles.cardImg} />
                <div className='cardHeaderFont'>Web Development</div>
                <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
                <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 marginBottom2">
              <div className={styles.mainCard}>
                <img src={img1} alt="img" className={styles.cardImg} />
                <div className='cardHeaderFont'>Web Development</div>
                <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
                <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 marginBottom2">
              <div className={styles.mainCard}>
                <img src={img1} alt="img" className={styles.cardImg} />
                <div className='cardHeaderFont'>Web Development</div>
                <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
                <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
              </div>
            </div>
          </div>

        

          <img src={img2} alt="img2" className={styles.img1} />
          <img src={img3} alt="img3" className={styles.img2} />
         


          <img src={img4} alt="img4" className={styles.img4} />

          <img src={img5} alt="img5" className={styles.img5} />


        </div>
        <div className="d-flex justify-content-center">
          <button className={styles.btnSeemore}>See More</button>
        </div>


      </div>
    </div>
  );
};

export default Services;