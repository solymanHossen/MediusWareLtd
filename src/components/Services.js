import React from 'react';
import styles from "../Styles/Services.module.css"
import img1 from "../Assets/web 2.png"
import { AiOutlineArrowRight } from 'react-icons/ai';
import hoverPic from "../Assets/Vector 1.png"
import hoverPic2 from "../Assets/Vector 2.png"

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
              <img src={img1} alt="img" className={styles.cardImg}/>
              <div className='cardHeaderFont'>Web Development</div>
              <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
              <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
              <img src={hoverPic} alt="hover" className={styles.imgHover} />
              <img src={hoverPic2} alt="hover" className={styles.imgHover2} />
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className={styles.mainCard}>
              <img src={img1} alt="img" className={styles.cardImg}/>
              <div className='cardHeaderFont'>Web Development</div>
              <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
              <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
            </div>
          </div> <div className="col-md-3 col-sm-6">
            <div className={styles.mainCard}>
              <img src={img1} alt="img" className={styles.cardImg}/>
              <div className='cardHeaderFont'>Web Development</div>
              <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
              <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
            </div>
          </div> <div className="col-md-3 col-sm-6">
            <div className={styles.mainCard}>
              <img src={img1} alt="img" className={styles.cardImg}/>
              <div className='cardHeaderFont'>Web Development</div>
              <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
              <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
            </div>
          </div> <div className="col-md-3 col-sm-6">
            <div className={styles.mainCard}>
              <img src={img1} alt="img" className={styles.cardImg}/>
              <div className='cardHeaderFont'>Web Development</div>
              <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
              <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
            </div>
          </div> <div className="col-md-3 col-sm-6">
            <div className={styles.mainCard}>
              <img src={img1} alt="img" className={styles.cardImg}/>
              <div className='cardHeaderFont'>Web Development</div>
              <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
              <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
            </div>
          </div> <div className="col-md-3 col-sm-6">
            <div className={styles.mainCard}>
              <img src={img1} alt="img" className={styles.cardImg}/>
              <div className='cardHeaderFont'>Web Development</div>
              <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
              <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
            </div>
          </div> <div className="col-md-3 col-sm-6">
            <div className={styles.mainCard}>
              <img src={img1} alt="img" className={styles.cardImg}/>
              <div className='cardHeaderFont'>Web Development</div>
              <div className='smallFont text-center mt-2'>We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is ...</div>
              <a className={styles.cardBtn} href='#'>Read more <AiOutlineArrowRight /></a>
            </div>
          </div>
        </div>
        </div>
        <div className="d-flex justify-content-center">
         <button className={styles.btnSeemore}>See More</button>
        </div>


      </div>
    </div>
  );
};

export default Services;