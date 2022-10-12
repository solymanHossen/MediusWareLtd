import React from 'react';
import styles from "../Styles/Footer.module.css"
import logo from "../Assets/logo 1.png"
import { AiFillFacebook, AiFillInstagram, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';
import { FiMapPin } from "react-icons/fi"
import { MdEmail } from "react-icons/md"
import { IoMdCall } from "react-icons/io"

const Footer = () => {
  return (
    <div className='marginTop2'>
      <div className={styles.bgImg}>
        <div className="container">
          <div className={styles.paddingFooter}>
            <div className="row">
              <div className="col-md-3">
                <div className="d-flex flex-column">
                  <img src={logo} alt="logo" className={styles.mainLogo} />
                  <p className='mb-5'>Our mantra is to bring an evolution in the business world providing top-class services and game changing innovations.</p>
                  <div className="d-flex gap-2">
                    <AiFillFacebook className='iconsSize' />
                    <AiOutlineTwitter className='iconsSize' />
                    <AiOutlineMail className='iconsSize' />
                    <AiFillInstagram className='iconsSize' />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex  flex-column">
                  <div className='footerFont mb-4'>IT Services</div>
                  <ul>
                    <li className="servicesPFont mb-3" >Web Solution</li>
                    <li className="servicesPFont mb-3" >Mobile App Solution</li>
                    <li className="servicesPFont mb-3" >Enterprise Solution</li>
                    <li className="servicesPFont mb-3" >E-commerce Solution</li>
                    <li className="servicesPFont mb-3" >UX/UI Solution</li>
                    <li className="servicesPFont mb-3" >API Integration</li>
                    <li className="servicesPFont mb-3" >Software Development</li>
                    <li className="servicesPFont mb-3" >SQA</li>
                    <li className="servicesPFont mb-3" >Digital Marketing Solution</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className='footerFont mb-4'>Bangladesh Office</div>
                <ul>
                  <li className='mb-4' ><FiMapPin className={styles.iconsC} /><span className="servicesPFont ">Ring Road, Mohammadpur House- 18/5, Floor - 3rd, Dhaka</span></li>
                  <li className='mb-4' ><MdEmail className={styles.iconsC} /><span className="servicesPFont ">contact@mediusware.com</span></li>
                  <li className='mb-4' ><IoMdCall className={styles.iconsC} /><span className="servicesPFont ">sales@mediusware.com</span></li>
                  <li className='mb-4' ><IoMdCall className={styles.iconsC} /><span className="servicesPFont ">+1 (978) 431-0122</span></li>

                </ul>
              </div>   <div className="col-md-3">
                <div className='footerFont mb-4'>USA Office</div>
                <ul>
                  <li className='mb-4' ><FiMapPin className={styles.iconsC} /><span className="servicesPFont " className="servicesPFont mb-3">Ring Road, Mohammadpur House- 18/5, Floor - 3rd, Dhaka</span></li>
                  <li className='mb-4' ><MdEmail className={styles.iconsC} /><span className="servicesPFont ">contact@mediusware.com</span></li>
                  <li className='mb-4' ><IoMdCall className={styles.iconsC} /><span className="servicesPFont ">sales@mediusware.com</span></li>
                  <li className='mb-4' ><IoMdCall className={styles.iconsC} /><span className="servicesPFont ">+1 (978) 431-0122</span></li>

                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="pt-5 pb-5">
          <div className="row">

            <div className="col-md-6">
              <div>© 2021 Mediusware. All Rights Reserved</div>
            </div>
            <div className="col-md-6">
              <div className='d-flex align-items-center justify-content-end gap-4'>
                <div>Home</div>
                <div>About</div>
                <div>Services</div>
                <div>Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Footer;