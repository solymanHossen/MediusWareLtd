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
                  <p className='mb-5 colorFont2'>Our mantra is to bring an evolution in the business world providing top-class services and game changing innovations.</p>
                  <div className="d-flex gap-2">
                    <a href=""><AiFillFacebook className='iconsSize' /></a>
                    <a href=""> <AiOutlineTwitter className='iconsSize' /></a>
                    <a href=""><AiOutlineMail className='iconsSize' /></a>
                    <a href=""><AiFillInstagram className='iconsSize' /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex  flex-column">
                  <div className='footerFont mb-4'>IT Services</div>
                  <ul>
                    <li className=" mb-3" > <a href="" className='servicesPFont' > Web Solution </a></li>
                    <li className=" mb-3" > <a href="" className='servicesPFont' >Mobile App Solution </a></li>
                    <li className=" mb-3" > <a href="" className='servicesPFont' >Enterprise Solution </a></li>
                    <li className=" mb-3" > <a href="" className='servicesPFont' >E-commerce Solution </a></li>
                    <li className=" mb-3" > <a href="" className='servicesPFont' >UX/UI Solution </a></li>
                    <li className=" mb-3" > <a href="" className='servicesPFont' >API Integration </a></li>
                    <li className=" mb-3" > <a href="" className='servicesPFont' >Software Development </a></li>
                    <li className=" mb-3" > <a href="" className='servicesPFont' >SQA </a></li>
                    <li className=" mb-3" > <a href="" className='servicesPFont' >Digital Marketing Solution </a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className='footerFont mb-4'>Bangladesh Office</div>
                <ul>
                <li className='mb-4' > <div className="d-flex gap-2"><div><FiMapPin className={styles.iconsC} /></div><span  className="servicesPFont mb-3">Ring Road, Mohammadpur House- 18/5, Floor - 3rd, Dhaka</span></div> </li>
                  <li className='mb-4' ><MdEmail className={styles.iconsC} /><span className="servicesPFont ">contact@mediusware.com</span></li>
                  <li className='mb-4' ><IoMdCall className={styles.iconsC} /><span className="servicesPFont ">sales@mediusware.com</span></li>
                  <li className='mb-4' ><IoMdCall className={styles.iconsC} /><span className="servicesPFont ">+1 (978) 431-0122</span></li>

                </ul>
              </div>   <div className="col-md-3">
                <div className='footerFont mb-4'>USA Office</div>
                <ul>
                  <li className='mb-4' > <div className="d-flex gap-2"><div><FiMapPin className={styles.iconsC} /></div><span  className="servicesPFont mb-3">Ring Road, Mohammadpur House- 18/5, Floor - 3rd, Dhaka</span></div> </li>
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

            <div className="col-md-6 textAlignCenter">
              <div>© 2021 Mediusware. All Rights Reserved</div>
            </div>
            <div className="col-md-6 ">
              <div className='d-flex align-items-center justiFyContent justify-content-end gap-4 '>
                <div><a href=""> Home </a> </div>
                <div><a href=''>About</a></div>
                <div><a href=''>Services </a></div>
                <div><a href=''>Contact </a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Footer;