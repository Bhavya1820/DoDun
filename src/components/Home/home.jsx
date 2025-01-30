import React from 'react'
import './home.css'
import { CiShare2 } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";
import { FaPerson } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
     <div className='Home'>
     <div  className='Home_image' data-aos="fade-right">
        <img src="https://ik.imagekit.io/jncw2kb8u/marvin-meyer-SYTO3xs06fU-unsplash.jpg?updatedAt=1738232729946" alt=""/>
      </div>
      <div className='Home_content' data-aos="fade-left">
      <p className='P1'>Crafting Your Unique Digital Story, Our Way!</p>
        <p className='P2'>We believe every bussiness has a story worth telling, and our mission is to transform that story into a powwerful digital presence.</p>
        <button className='contact_us'>Let's build a legacy</button>
      </div>
     </div>
     <div className='cards'>
     <div className='card1'>
     <CiShare2 />
     <h3>521+</h3>
     <h5>Projects Delivered</h5>
     </div>
     <div className='card2'>
     <CiClock2 />
     <h3>1,463</h3>
     <h5>Hours Of Support</h5>
     </div>
     <div className='card3'>
     <AiOutlineTeam />
     <h3>15</h3>
     <h5>Team Experts</h5>
     </div>
     <div className='card4'>
     <FaPerson />
     <h3>10+</h3>
     <h5>Clients Served</h5>
     </div>
     </div>
    </>
  )
}

export default home